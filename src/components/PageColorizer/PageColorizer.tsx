import { Button } from 'antd';
import { FC, ReactNode } from 'react';
import { RgbColorPicker } from 'react-colorful';
import { useWalletContext } from '../../context';
import { getKeys } from '../../utils';
import { Buttons, ColoredPage, Input, Inputs, Root } from './styled';
import { useColorizer } from './useColorizer';

type PageColorizerProps = {
  children: ReactNode;
};

/** Returns colored Page and components which to change the color */
export const PageColorizer: FC<PageColorizerProps> = ({ children }) => {
  const { walletAccountId } = useWalletContext();

  const {
    getOnInputChangeHandler,
    selectedColor,
    setSelectedColor,
    getRemoteColor,
    setRemoteColor
  } = useColorizer();

  return (
    <ColoredPage selectedColor={selectedColor}>
      {children}

      {walletAccountId && (
        <Root>
          <RgbColorPicker color={selectedColor} onChange={setSelectedColor} />

          <Inputs>
            {getKeys(selectedColor).map((key) => (
              <Input
                key={key}
                value={selectedColor[key]}
                onChange={getOnInputChangeHandler(key)}
              />
            ))}
          </Inputs>

          <Buttons>
            <Button onClick={getRemoteColor} type="primary">
              GET
            </Button>
            <Button type="primary" onClick={setRemoteColor}>
              SET
            </Button>
          </Buttons>
        </Root>
      )}
    </ColoredPage>
  );
};
