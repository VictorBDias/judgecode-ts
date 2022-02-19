import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  variant?: 'regular' | 'outline' | 'ghost' | 'link';
  onClick: () => void;
  color?: string;
  [x:string]: any;
}
