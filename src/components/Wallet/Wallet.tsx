import { Button, Card } from 'antd';
import { cardClassName, Root } from './styled';
import { useWallet } from './useWallet';

/** Displays wallet info: user Id and balance */
export const Wallet = () => {
  const {
    connectWallet,
    disconnectWallet,
    walletAccountId,
    nearTokenBalance
  } = useWallet();

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
            Balance: <b>{nearTokenBalance}</b> NEAR
          </>
        </Card>
      )}
    </Root>
  );
};