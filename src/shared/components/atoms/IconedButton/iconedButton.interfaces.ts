import { ReactElement } from 'react';

export interface IconedButtonProps {
  icon: ReactElement;
  label?: string;
  color?: string;
  [x: string]: any;
}
