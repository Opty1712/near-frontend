import { styled } from 'linaria/react';
import { RgbColor } from '../../types';

export const ColoredPage = styled.div<{ selectedColor: RgbColor }>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  background-color: ${({ selectedColor: { b, g, r } }) =>
    `rgb(${r},${g},${b})`};
`;

export const Root = styled.div`
  margin: 0 auto;
  display: inline-block;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  border: 5px solid #444;
  box-shadow: 0 0 69px -16px #fff;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
export const Input = styled.input`
  border-radius: 5px;
  height: 50px;
  width: 50px;
  text-align: center;
  font-size: 30px;
  border-color: #eee;
`;
