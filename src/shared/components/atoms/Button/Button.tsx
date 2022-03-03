import React from 'react';
import { Button as ButtonC } from '@chakra-ui/react';
import { lighten, shade } from 'polished';

// CUSTOM IMPORTS
import { ButtonProps } from './button.interfaces';
import { Typography } from '..';

type ColorTypes = Pick<ButtonProps, 'color'>;

const Button = ({
  children, onClick, variant, color = 'lightSecondary', ...rest
}: ButtonProps) => {
  // FUNCTIONS
  const getHoverColor = (color: any) => {
    switch (color) {
      case 'lightSecondary':
        return shade(0.15, '#E190F0');

      case 'null':
        return lighten(0.4, '#cd3248');

      default:
        return shade(0.15, '#D172D8');
    }
  };

  return (
    <ButtonC
      bg={color}
      variant={variant}
      _hover={{ bg: getHoverColor(color) }}
      {...rest}
    >
      <Typography variant="whiteSubTitle" onClick={onClick}>
        {children}
      </Typography>
    </ButtonC>

  );
};

export { Button };
