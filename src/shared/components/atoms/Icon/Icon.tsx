import React from 'react';

//* CUSTOM IMPORTS

import { IconContainer } from './icon.styles';
import { setIcon } from '../../../utils/icons';
import { IconProps } from './icon.interfaces';

/** This component has all icons of the application */
function Icon({ variant, size = 20, iconName = '' }: IconProps) {
  return (
    <IconContainer variant={variant} size={size}>
      {setIcon(iconName)}
    </IconContainer>
  );
}

export { Icon };
