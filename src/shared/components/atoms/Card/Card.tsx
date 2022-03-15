import React from 'react';
import { Box } from '@chakra-ui/react';

// CUSTOM IMPORTS
import { CardProps } from './card.interfaces';

const Card = ({
  children,
  width = 300,
  height = 150,
  color,
  margin = 150,
  ...rest
}: CardProps) => (
  <Box
    shadow="lg"
    bg="white"
    style={{
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
    {children}
  </Box>
);

export { Card };
