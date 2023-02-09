import { FC, ReactNode } from 'react';
import { RgbColorPicker } from 'react-colorful';
import { getKeys } from '../../utils';
import { ColoredPage, Input, Inputs, Root } from './styled';
import { useColorizer } from './useColorizer';

type PageColorizerProps = {
  children: ReactNode;
};

export const PageColorizer: FC<PageColorizerProps> = ({ children }) => {
  const { getOnInputChangeHandler, selectedColor, setSelectedColor } =
    useColorizer();

  return (
    <ColoredPage selectedColor={selectedColor}>
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

        {children}
      </Root>
    </ColoredPage>
  );
};
