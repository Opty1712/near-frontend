import * as nearAPI from 'near-api-js';
import { useEffect, useState } from 'react';
import { useWalletContext } from '../context';
import { RgbColor } from '../types';

export const useRemoteColor = (): ColorMethods => {
  const { connector, walletAccountId } = useWalletContext();
  const [colorMethods, setColorMethods] = useState<ColorMethods>({});

  useEffect(() => {
    const account = connector?.account();

    if (!account || !walletAccountId) {
      return;
    }

    const { Contract } = nearAPI;

    const contract = new Contract(account, contractId, {
      viewMethods: ['get'],
      changeMethods: ['set']

      /** Have to override typings as contracts don`t have TS generics */
    }) as unknown as nearAPI.Contract & ColorMethods;

    setColorMethods({ get: contract.get, set: contract.set });
  }, [connector, walletAccountId]);

  return { ...colorMethods };
};

const contractId = 'frontend-test-1.badconfig.testnet';

type Color = [number, number, number];

type ColorMethods = {
  get?: () => Promise<Color>;
  set?: (color: RgbColor) => Promise<void>;
};
