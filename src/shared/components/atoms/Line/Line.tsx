import React from 'react';
import { LineProps } from './line.interfaces';

//* CUSTOM IMPORTS
import { Container } from './line.styles';

export const Line = ({
  size = 2,
  orientation = 'horizontal',
  color = 'almostSmoked',
  ...rest
}: LineProps) => (
  <Container size={size} orientation={orientation} color={color} {...rest} />
);
