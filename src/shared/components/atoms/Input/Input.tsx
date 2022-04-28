import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

// INTERFACES
import { InputProps } from './input.interfaces';

// CUSTOM IMPORTS
import { Container } from './input.styles';
import { Typography } from '..';
import { Icon } from '../Icon';

const Input: ForwardRefRenderFunction<InputProps, any> = (props, ref) => {
  const { label, icon = '' } = props;
  return (
    <Container>
      <Typography variant="regular">{label}</Typography>
      <InputGroup>
        {icon !== '' && (
          <InputLeftElement pointerEvents="none">
            <Icon name={icon} variant="secondary" />
          </InputLeftElement>
        )}
        <ChakraInput
          focusBorderColor="secondary"
          style={{ maxWidth: 320 }}
          ref={ref}
          {...props}
        />
      </InputGroup>
    </Container>
  );
};

export const FormInput = forwardRef(Input);
