import { styled } from 'linaria/react';
import { ChangeEvent, useState } from 'react';
import { RgbColorPicker } from 'react-colorful';
import { Wallet } from './components';
import { getKeys } from './utils';

export const App = () => {
  const [selectedColor, setSelectedColor] = useState<RgbColor>(initialColor);

  const getOnInputChange =
    (part: keyof RgbColor) => (event: ChangeEvent<HTMLInputElement>) => {
      const newPartValue = event.target.value;
      setSelectedColor((value) => ({ ...value, [part]: newPartValue }));
    };

  return (
    <Page selectedColor={selectedColor}>
      <Wallet />

      <ColorRoot>
        <RgbColorPicker color={selectedColor} onChange={setSelectedColor} />
        <Inputs>
          {getKeys(selectedColor).map((key) => (
            <Input
              key={key}
              value={selectedColor[key]}
              onChange={getOnInputChange(key)}
            />
          ))}
        </Inputs>
      </ColorRoot>
    </Page>
  );
};

const Page = styled.div<{ selectedColor: RgbColor }>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  background-color: ${({ selectedColor: { b, g, r } }) =>
    `rgb(${r},${g},${b})`};
`;

const Input = styled.input`
  border-radius: 5px;
  height: 50px;
  width: 50px;
  text-align: center;
  font-size: 30px;
  border-color: #eee;
`;

const initialColor: RgbColor = {
  r: 255,
  g: 255,
  b: 255
};

const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const ColorRoot = styled.div`
  margin: 0 auto;
  display: inline-block;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  border: 5px solid #444;
  box-shadow: 0 0 69px -16px #fff;
`;

type RgbColor = {
  r: number;
  g: number;
  b: number;
};
