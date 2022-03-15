import { ReactNode } from 'react';

export interface FooterButtonProps {
  onCancel: any;
  isDisable?: boolean;
  formId?: number | string;
  isLoading?: boolean;
  type?: string;
  disableCancelButton?: boolean;
  disableConfirmButton?: boolean;
  saveButton?: string;
  cancelButton?: string;
  confirmButtonName?: string;
  cancelButtonName?: string;
  confirmSecurity?: boolean;
}
