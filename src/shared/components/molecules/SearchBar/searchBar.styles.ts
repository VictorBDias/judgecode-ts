import styled, { css } from 'styled-components';

// CUSTOM IMPORTS
import { IconButton } from '@chakra-ui/react';
import { SearchBarProps } from './searchBar.interfaces';

export const Container = styled.div<SearchBarProps>`
  padding: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 45px;
  border-radius: 8px;
  border: 2px solid transparent;
  background-color: #eeeeee;
  input {
    flex: 1;
    outline: 0;
    background: none;
  }

  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: #d172d8;
      }
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #d172d8 !important;
    `}
`;

export const ClearButton = styled(IconButton)`
  margin-left: auto;
`;

export const SearchButton = styled(IconButton)`
  margin-right: auto;
`;
