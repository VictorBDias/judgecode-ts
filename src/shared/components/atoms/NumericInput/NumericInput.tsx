import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

// INTERFACES
import { NumericInputProps } from './numericInput.interfaces';

// CUSTOM IMPORTS
import { Container } from './numericInput.styles';
import { Typography } from '..';

const NumericInput: ForwardRefRenderFunction<NumericInputProps, any> = (props, ref) => {
  const { label } = props;
  return (
    <Container>
      <Typography variant="regular">{label}</Typography>
      <NumberInput style={{ maxWidth: 320 }}>
        <NumberInputField ref={ref} {...props} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Container>
  );
};

export const NumericFormInput = forwardRef(NumericInput);
