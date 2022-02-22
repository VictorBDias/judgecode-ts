import React from 'react';
import { Input } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

// CUSTOM IMPORTS
import { InputFormProps } from './inputForm.interfaces';
// import { Typography } from '..';

const InputForm = ({
  name, placeholder, control, ...rest
}: InputFormProps) => (
  <Controller
    control={control}
    render={({ field: { onChange, value } }) => (
      <Input
        name={name}
        placeholder={name}
        // onChangeText={(value:string) => onChange(value)}
        {...rest}

      />
    )}
    name={name}
  />
);

export { InputForm };
