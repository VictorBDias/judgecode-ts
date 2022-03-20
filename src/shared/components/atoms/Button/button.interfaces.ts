import { ReactNode, ReactElement } from 'react';

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  leftIcon?: ReactElement;
  variant?: 'solid' | 'ghost' | 'outline' | 'link';
  color?: 'lightSecondaryObj' | 'secondaryObj';
  size?: 'sm' | 'md' | 'lg' | 'xs';
  [x: string]: any;
}
