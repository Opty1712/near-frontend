import { createContext, FC, ReactNode, useContext } from 'react';
import { useWallet, UseWalletResult } from '../hooks';

export type WalletContextState = UseWalletResult;

const initialValue: WalletContextState = {
  connectWallet: () => void 0,
  disconnectWallet: () => void 0,
  walletAccountId: '',
  walletBalance: ''
};

const WalletContextContext = createContext<WalletContextState>(initialValue);

type WalletContextProviderProps = {
  children: ReactNode;
};

/**
 * Provider to get Wallet data inside App
 */
export const WalletContextProvider: FC<WalletContextProviderProps> = ({
  children
}) => {
  const { connectWallet, disconnectWallet, walletBalance, walletAccountId } =
    useWallet();

  return (
    <WalletContextContext.Provider
      value={{
        connectWallet,
        disconnectWallet,
        walletBalance,
        walletAccountId
      }}
    >
      {children}
    </WalletContextContext.Provider>
  );
};

/** Hok to get data through WalletContext context */
export const useWalletContext = () => useContext(WalletContextContext);
