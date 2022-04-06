import { ReactNode, ReactElement } from 'react';

export type Option = {
  id: number;
  label: string;
  value: string | number;
};

export interface SelectProps {
  options: Option[];
  placeholder?: string;
  [x: string]: any;
}
