import React from 'react';
import { Button as ButtonC } from '@chakra-ui/react';

// CUSTOM IMPORTS
import { ButtonProps } from './button.interfaces';
import { Typography } from '..';

const Button = ({
  children, onClick, variant, color = 'lightSecondary', ...rest
}: ButtonProps) => (

  <ButtonC
    bg={color}
    variant={variant}
    _hover={{ bg: 'secondary' }}
    {...rest}
  >
    <Typography variant="whiteSubTitle" onClick={onClick}>
      {children}
    </Typography>
  </ButtonC>

);

export { Button };
