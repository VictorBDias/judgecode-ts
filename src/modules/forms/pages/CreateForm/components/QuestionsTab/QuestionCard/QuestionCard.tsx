import React from 'react';
import {
  Card,
  Tag,
  Typography,
} from '../../../../../../../shared/components/atoms';

export const QuestionCard = (data: any) => {
  console.log(data);
  const {
    data: { title, description, tag },
  } = data;
  return (
    <Card margin={8}>
      <Tag label={tag} tagVariant="solid" style={{ marginBottom: 8 }} />
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </Card>
  );
};
