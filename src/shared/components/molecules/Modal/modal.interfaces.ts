import { ReactElement } from 'react';

export interface ModalProps {
  children: ReactElement;
  title: string;
  show: boolean;
  onClose: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  onSubmit?: any;
  disableFooter?: boolean;
}
