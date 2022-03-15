import styled, { css } from 'styled-components';
import SimpleBar from 'simplebar-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'simplebar/dist/simplebar.min.css';
import { ScrollableListProps } from './scrollableList.interfaces';

type ContainerType = {
  class: string;
};

export const Container = styled.div<ContainerType>`
  color: '#000';
  .simplebar-content {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export const List = styled(SimpleBar)<any>`
  ${(props) =>
    props.size &&
    css`
      height: ${props.size}px;
    `};
`;
