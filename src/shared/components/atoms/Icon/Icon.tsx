import React from 'react';

//* CUSTOM IMPORTS

import { IconContainer } from './icon.styles';
import { setIcons } from './utils/setIcons';
import { IconProps } from './icon.interfaces';

/** This component has all icons of the application */
function Icon({ variant, size = 20, name = '' }: IconProps) {
  return (
    <IconContainer variant={variant} size={size}>
      {setIcons(name)}
    </IconContainer>
  );
}

export { Icon };
