import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';

// INTERFACES
import { InputProps } from './input.interfaces';

// CUSTOM IMPORTS
import { Container } from './input.styles';
import { Typography } from '..';

const Input: ForwardRefRenderFunction<InputProps, any> = (props, ref) => {
  const { label } = props;
  return (
    <Container>
      <Typography variant="regular">{label}</Typography>
      <ChakraInput ref={ref} {...props} />
    </Container>
  );
};

export const FormInput = forwardRef(Input);
