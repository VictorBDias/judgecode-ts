import React from 'react';
import { useForm } from 'react-hook-form';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  // Input,
  Button,
} from '@chakra-ui/react';

import { InputForm, Input } from '../../../../shared/components/atoms';

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

      <Input {...register('name', { required: true })} placeholder="name" />

      {/* <FormControl>
        <input {...register('name', { required: true })} placeholder="name" />
        {errors.name?.type === 'required' && 'First name is required'}

        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl> */}
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export { CreateForm };
