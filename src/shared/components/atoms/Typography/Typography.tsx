import React from 'react';

// CUSTOM IMPORTS
import { Paragraph } from './typography.styles';
import { TypographyProps } from './typography.interfaces';

/** Typography displays words and characters at various sizes. */
function Typography({
  children,
  maxLines,
  className,
  variant,
  ...rest
}: TypographyProps) {
  return (
    <Paragraph
      maxLines={maxLines}
      className={className}
      variant={variant}
      {...rest}
    >
      {children}
    </Paragraph>
  );
}

export { Typography };
