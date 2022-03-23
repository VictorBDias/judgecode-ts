import { HTMLAttributes } from 'react';

export type IconVariants = 'white' | 'secondary' | 'black' | 'error';

export interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  iconName: string;
  variant?: IconVariants;
}

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  iconName?: string;
  variant?: IconVariants;
}
