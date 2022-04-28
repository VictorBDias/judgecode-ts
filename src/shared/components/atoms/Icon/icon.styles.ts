/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { IconProps } from './icon.interfaces';

export const IconContainer = styled.div<IconProps>`
  position: relative;
  display: flex;

  svg {
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    min-height: ${(props) => props.size}px;
    min-height: ${(props) => props.size}px;

    fill: ${(props) => {
      const { variant } = props;
      switch (variant) {
        case 'secondary':
          return '#D172D8';
        case 'error':
          return '#cd3248';
        case 'white':
          return '#fff';
        default:
          return '#000';
      }
    }};
  }
`;
