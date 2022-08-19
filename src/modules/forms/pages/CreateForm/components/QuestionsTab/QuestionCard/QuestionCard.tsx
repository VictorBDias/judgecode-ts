import React from 'react';
import {
  Card,
  Tag,
  Typography,
} from '../../../../../../../shared/components/atoms';
import { IQuestionCardProps } from './questionCard.interfaces';

export const QuestionCard = ({
  id,
  title,
  tag = '',
  onEdit,
  onDelete,
}: IQuestionCardProps) => {
  return (
    <Card id={id} margin={8} onDelete={onDelete} onEdit={onEdit}>
      <Tag label={tag} tagVariant="solid" style={{ marginBottom: 8 }} />
      <Typography>{title}</Typography>
    </Card>
  );
};
