import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
} from '@chakra-ui/react';

import { FormInput } from '../../../../shared/components/atoms';

// import { Teste } from './interfaces/formList.interface';\type FormInputs = {
  type FieldValues = {
    name: string
  }

const CreateForm = () => {
  const {
    control, handleSubmit, register, formState: { errors },
  } = useForm<FieldValues>();

  // FUNCTIONS
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <FormInput {...register('name', { required: true })} placeholder="name" label="label" />

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export { CreateForm };
