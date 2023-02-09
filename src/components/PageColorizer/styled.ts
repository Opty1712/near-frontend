import { styled } from 'linaria/react';
import { mobileBreakPoint } from '../../constants';
import { RgbColor } from '../../types';

export const ColoredPage = styled.div<{ selectedColor: RgbColor }>`
  box-sizing: border-box;
  width: 100%;
  min-height: 600px;
  min-width: 300px;
  display: flex;
  align-items: center;

  background-color: ${({ selectedColor: { b, g, r } }) =>
    `rgb(${r},${g},${b})`};

  @media screen and (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
    justify-content: space-around;
    padding: 50px 0;
    overflow: auto;
  }
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

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
