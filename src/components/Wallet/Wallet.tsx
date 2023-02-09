import { Button, Card } from 'antd';
import { useWallet } from '../../hooks';
import { cardClassName, Root } from './styled';

/** Displays wallet info: user Id and balance */
export const Wallet = () => {
  const { connectWallet, disconnectWallet, walletAccountId, walletBalance } =
    useWallet();

  return (
    <Root>
      <Button
        onClick={walletAccountId ? disconnectWallet : connectWallet}
        type="primary"
      >
        {walletAccountId ? 'Disconnect from Near' : 'Connect to NEAR'}
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
