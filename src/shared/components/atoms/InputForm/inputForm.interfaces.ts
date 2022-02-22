import { InputHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';

export interface InputFormProps {
  control: Control;
  name: string;
  placeholder: string;
  // minLenght?: number | null;
  // onChangeText: (value:string) => void;
}
