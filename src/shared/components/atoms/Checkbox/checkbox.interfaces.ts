import React from 'react';

export interface CheckBoxProps {
  isChecked?: boolean;
  label?: string;
  isDisabled?: boolean;
  defaultChecked?: boolean;
  onChange?: () => void;
  [x: string]: any;
}
