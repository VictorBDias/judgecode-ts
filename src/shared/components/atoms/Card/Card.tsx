import React from 'react';
import { Box } from '@chakra-ui/react';

// CUSTOM IMPORTS
import { CardProps } from './card.interfaces';
import { SimpleMenu } from './card.styles';

const Card = ({
  children,
  width = 300,
  height = 150,
  color,
  margin = 150,
  onEdit,
  onDelete,
  ...rest
}: CardProps) => (
  <Box
    shadow="lg"
    bg="white"
    style={{
      position: 'relative',
      backgroundColor: color,
      borderRadius: 8,
      margin,
      width,
      height,
      padding: 16,
      boxShadow: '4px 4px 10px 2px rgba(0, 0, 0, 0.2)',
    }}
    {...rest}
  >
    {onEdit && onDelete && <SimpleMenu onEdit={onEdit} onDelete={onDelete} />}

    {children}
  </Box>
);

export { Card };
