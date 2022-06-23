import React from 'react';
import { IconButton } from '@chakra-ui/react';

import { lighten, shade } from 'polished';

// CUSTOM IMPORTS
import { IconedButtonProps } from './iconedButton.interfaces';
import { Typography } from '..';
import { Container } from './iconedButton.styles';

type ColorTypes = Pick<IconedButtonProps, 'color'>;

const IconedButton = ({
  icon,
  onClick,
  label,
  color = 'lightSecondary',
  ...rest
}: IconedButtonProps) => {
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
    <Container onClick={onClick}>
      <IconButton
        colorScheme={color}
        aria-label="Search database"
        icon={icon}
      />
      {label && <Typography variant="regular">{label}</Typography>}
    </Container>
  );
};

export { IconedButton };
