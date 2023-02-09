import { css } from 'linaria';
import { styled } from 'linaria/react';
import { mobileBreakPoint } from '../../constants';

export const Root = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${mobileBreakPoint}) {
    position: static;
  }
`;

const shadow = 'box-shadow: 0 0 60px -30px #000;';

export const buttonClassName = css`
  ${shadow}
`;

export const cardClassName = css`
  margin: 10px auto;
  display: block;
  ${shadow}
`;
