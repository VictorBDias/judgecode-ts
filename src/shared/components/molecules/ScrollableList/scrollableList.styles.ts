import styled, { css } from 'styled-components';
import SimpleBar from 'simplebar-react';

type ContainerType = {
  class: string;
};

export const Container = styled.div`
  color: '#000';
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const List = styled(SimpleBar)<any>`
  ${(props) =>
    props.size &&
    css`
      height: ${props.size}px;
    `};
`;

export const ButtonContainer = styled.div`
  padding: 0 8px;
  margin-top: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
