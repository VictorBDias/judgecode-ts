import React from 'react';
import { Box } from '@chakra-ui/react';

// CUSTOM IMPORTS
import { CardProps } from './pageCard.interfaces';
import { Container } from './pageCard.styles';

export const PageCard = ({
  children,
  color,
  margin = 80,
  height,
  ...rest
}: CardProps) => (
  <Container>
    <Box
      shadow="lg"
      bg="white"
      style={{
        backgroundColor: color,
        borderRadius: 8,
        margin,
        padding: 40,
        boxShadow: '4px 4px 10px 2px rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
      }}
      {...rest}
    >
      {children}
    </Box>
  </Container>
);
