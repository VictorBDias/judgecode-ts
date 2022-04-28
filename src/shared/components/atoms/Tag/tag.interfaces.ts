import { Icons } from '../Icon';

export interface TagProps {
  label: string;
  iconName?: Icons;
  tagVariant?: 'solid' | 'outline';
  create?: boolean;
  [x: string]: any;
}
