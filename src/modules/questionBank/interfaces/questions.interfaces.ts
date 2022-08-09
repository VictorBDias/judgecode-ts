import { InputProps } from '@chakra-ui/react';

export interface IInputProps extends InputProps {
  label: string;
  name: string;
  placeholder: string;
}

export type IQuestion = {
  id: string;
  title: string;
  body: string;
  language: string;
  owner_id: string;
  category_id: string;
};
