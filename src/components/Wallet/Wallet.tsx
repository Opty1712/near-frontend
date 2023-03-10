import { Button, Card } from 'antd';
import { useWalletContext } from '../../context';
import { buttonClassName, cardClassName, Root } from './styled';

/** Displays wallet info: user Id and balance */
export const Wallet = () => {
  const { connectWallet, disconnectWallet, walletAccountId, walletBalance } =
    useWalletContext();

  return (
    <Root>
      <Button
        onClick={walletAccountId ? disconnectWallet : connectWallet}
        type="primary"
        className={buttonClassName}
      >
        {walletAccountId ? 'Disconnect from NEAR' : 'Connect to NEAR'}
      </Button>

      {walletAccountId && (
        <Card
          className={cardClassName}
          title={walletAccountId}
          size="small"
          type="inner"
        >
          <>
            Balance: <b>{walletBalance}</b> NEAR
          </>
        </Card>
      )}
    </Root>
  );
};
