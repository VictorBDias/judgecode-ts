import React from 'react';

export interface CheckBoxProps {
  label: string;
  isDisabled?: boolean;
  defaultChecked?: boolean;
  [x: string]: any;
}
