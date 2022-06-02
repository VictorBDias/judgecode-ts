import { Icons } from '../Icon';

export interface TagProps {
  label: string;
  iconName?: Icons;
  selected?: boolean;
  size?: 'sm' | 'md' | 'lg';
  tagVariant?: 'solid' | 'outline';
  [x: string]: any;
}
