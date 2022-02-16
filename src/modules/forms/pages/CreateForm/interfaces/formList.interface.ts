import {
  InputProps,
} from '@chakra-ui/react';

export interface IInputProps extends InputProps {
  label: string;
  name: string;
  placeholder: string;
}

export type Teste = {
  name: string;
  grade: string;
  age: number;
};
