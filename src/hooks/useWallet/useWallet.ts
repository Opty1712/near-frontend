import * as nearAPI from 'near-api-js';
import { formatNearAmount } from 'near-api-js/lib/utils/format';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { isClientSide } from '../../utils';

export type UseWalletResult = {
  connectWallet: VoidFunction;
  disconnectWallet: VoidFunction;
  walletAccountId: string;
  walletBalance: string;
};

/** Returns wallet data and connect / disconnect methods */
export const useWallet = (): UseWalletResult => {
  const [connector, setConnector] = useState<nearAPI.WalletConnection>();
  const [balance, setBalance] = useState<AccountBalance>();

  const createConnector = useCallback(async () => {
    if (!isClientSide) {
      return;
    }

    const nearConnection = await nearAPI.connect(connectionConfig);
    const walletConnection = new nearAPI.WalletConnection(nearConnection, null);
    setConnector(walletConnection);
  }, []);

  useEffect(() => {
    createConnector();
  }, [createConnector]);

  const connectWallet = async () => {
    if (isClientSide) {
      await connector?.requestSignIn({});
    }
  };

  const walletAccountId = useMemo(
    () => connector?.getAccountId() ?? '',
    [connector]
  );

  const disconnectWallet = () => {
    if (isClientSide) {
      window.location.replace(
        window.location.origin + window.location.pathname
      );
      connector?.signOut();
    }
  };

  useEffect(() => {
    if (!walletAccountId) {
      return;
    }

    const account = connector?.account();

    account
      ?.getAccountBalance()
      .then(setBalance)
      .catch((error) => console.error(error));
  }, [connector, walletAccountId]);

  const walletBalance = getNearBalance(balance?.available);

  return {
    connectWallet,
    walletAccountId,
    disconnectWallet,
    walletBalance
  };
};
type AccountBalance = Awaited<ReturnType<nearAPI.Account['getAccountBalance']>>;

const connectionConfig: nearAPI.ConnectConfig = {
  networkId: 'testnet',
  keyStore: isClientSide
    ? new nearAPI.keyStores.BrowserLocalStorageKeyStore()
    : new nearAPI.keyStores.InMemoryKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org'
};

const nearDecimals = 24;

export const getNearBalance = (balance = ''): string =>
  Number(formatNearAmount(balance, nearDecimals)).toFixed(5) || '0';
