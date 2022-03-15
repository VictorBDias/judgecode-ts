import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  width?: number;
  height?: number;
  margin?: number;
  color?: string;
}
