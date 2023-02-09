import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useRemoteColor } from '../../hooks';
import { RgbColor } from '../../types';

/** Returns state helpers for managing color */
export const useColorizer = () => {
  const { get, set } = useRemoteColor();
  const [selectedColor, setSelectedColor] = useState<RgbColor>(initialColor);

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

  const { r, g, b } = selectedColor;
  const setRemoteColor = () => set?.({ r, g, b });

  const getOnInputChangeHandler =
    (part: keyof RgbColor) => (event: ChangeEvent<HTMLInputElement>) => {
      setSelectedColor((value) => ({ ...value, [part]: event.target.value }));
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
