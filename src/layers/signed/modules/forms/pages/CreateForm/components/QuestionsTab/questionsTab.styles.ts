import styled from 'styled-components';
import { Add, BookmarkBorder } from '@styled-icons/material';
import { theme } from '../../../../../../../../styles/themes';

export const AddIcon = styled(Add)`
  color: white;
  width: 24px;
  height: 24px;
`;

export const BookmarkIcon = styled(BookmarkBorder)`
  color: white;
  width: 16px;
  height: 16px;
`;

export const IconContainer = styled.div`
  background-color: #d172d8;
  border-radius: 16px;
`;
export const Container = styled.div`
  margin-left: 24px;
`;
