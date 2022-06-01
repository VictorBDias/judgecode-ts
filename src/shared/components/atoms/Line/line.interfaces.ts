import { HTMLAttributes } from 'react';

export interface LineProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  size?: number;
  color?: 'almostSmoked' | 'primaryText';
}
