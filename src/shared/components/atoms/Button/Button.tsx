import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonChakra } from '@chakra-ui/react';
import { ButtonProps } from './button.interfaces';

import { Container } from './button.styles';

function Button({
  children,
  onClick,
  variant = 'solid',
  size = 'md',
  color = 'lightSecondaryObj',
  leftIcon,
  ...rest
}: ButtonProps) {
  return (
    <Container>
      <ButtonChakra
        leftIcon={leftIcon}
        style={{ boxShadow: ' 2px 4px 4px #00000030' }}
        variant={variant}
        size={size}
        onClick={onClick}
        colorScheme={color}
        {...rest}
      >
        {children}
      </ButtonChakra>
    </Container>
  );
}

export { Button };
