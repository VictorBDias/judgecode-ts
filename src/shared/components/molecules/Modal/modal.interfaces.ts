import { ReactElement } from 'react';

type StateControlType = {
  show: boolean;
  setShow: (arg: boolean) => void;
};

export interface ModalProps {
  children: ReactElement;
  title: string;
  stateControl: StateControlType;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  onSubmit?: any;
  disableFooter?: boolean;
}
