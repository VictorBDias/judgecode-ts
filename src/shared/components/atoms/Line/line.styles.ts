import styled from 'styled-components';
import { LineProps } from './line.interfaces';

export const Container = styled.div<LineProps>`
  width: ${(props) =>
    props.orientation === 'horizontal' ? '100%' : `${props.size}px`};
  height: ${(props) =>
    props.orientation === 'vertical' ? '100%' : `${props.size}px`};
  background-color: #d1d2dc;
`;
