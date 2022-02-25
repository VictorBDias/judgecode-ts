import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, FormInput } from '../../../../../../shared/components/atoms';

// import { Teste } from './interfaces/formList.interface';\type FormInputs = {
  type FieldValues = {
    title: string,
    attempts: number,
  }

const GeneralTab = () => {
  const {
    control, handleSubmit, register, formState: { errors },
  } = useForm<FieldValues>();

  // FUNCTIONS
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <FormInput {...register('title', { required: true })} placeholder="Adicione um nome para o formulário" label="Nome do formulário" />
      <FormInput {...register('attempts', { required: true })} placeholder="Adicione um nome para o formulário" label="Nome do formulário" />

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export { GeneralTab };
