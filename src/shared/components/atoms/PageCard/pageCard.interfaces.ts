import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  width?: number;
  margin?: number;
  color?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  [x: string]: any;
}
