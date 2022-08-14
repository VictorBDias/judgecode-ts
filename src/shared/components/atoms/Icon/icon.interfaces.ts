import { HTMLAttributes } from 'react';

export type IconVariants = 'white' | 'secondary' | 'black' | 'error';

export type Icons =
  | ''
  | 'database'
  | 'plus'
  | 'search'
  | 'close'
  | 'email'
  | 'lock'
  | 'tags'
  | 'drag'
  | 'error'
  | 'menu';

export interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  name: Icons;
  variant?: IconVariants;
}

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  name?: Icons;
  variant?: IconVariants;
}
