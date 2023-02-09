import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useRemoteColor } from '../../hooks';
import { RgbColor } from '../../types';

/** Returns state helpers for managing color */
export const useColorizer = () => {
  const { get, set } = useRemoteColor();
  const [selectedColor, setSelectedColor] = useState<RgbColor>(initialColor);

  const setRemoteColor = () => set?.(selectedColor);

  const getRemoteColor = useCallback(
    async () =>
      get?.()
        .then(([r, g, b]) => setSelectedColor({ b, g, r }))
        .catch(console.error),
    [get]
  );

  useEffect(() => {
    getRemoteColor();
  }, [getRemoteColor]);

  const getOnInputChangeHandler =
    (part: keyof RgbColor) => (event: ChangeEvent<HTMLInputElement>) => {
      const incomingValue = event.target.value;
      const newPartValue = Number(incomingValue.replace(onlyDigits, ''));

      setSelectedColor((value) => ({
        ...value,
        [part]: newPartValue > maxValue ? maxValue : newPartValue
      }));
    };

  return {
    selectedColor,
    getOnInputChangeHandler,
    setSelectedColor,
    getRemoteColor,
    setRemoteColor
  };
};

const initialColor: RgbColor = {
  r: 255,
  g: 255,
  b: 255
};

const maxValue = 255;

const onlyDigits = /[^\d]/g;
