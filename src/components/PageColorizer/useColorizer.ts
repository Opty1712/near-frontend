import { ChangeEvent, useState } from 'react';
import { RgbColor } from '../../types';

/** Returns state helpers for managing color */
export const useColorizer = () => {
  const [selectedColor, setSelectedColor] = useState<RgbColor>(initialColor);

  const getOnInputChangeHandler =
    (part: keyof RgbColor) => (event: ChangeEvent<HTMLInputElement>) => {
      const newPartValue = event.target.value;
      setSelectedColor((value) => ({ ...value, [part]: newPartValue }));
    };

  return {
    selectedColor,
    getOnInputChangeHandler,
    setSelectedColor
  };
};

const initialColor: RgbColor = {
  r: 255,
  g: 255,
  b: 255
};
