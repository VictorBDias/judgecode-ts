import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  FormInput,
  NumericFormInput,
} from '../../../../../../shared/components/atoms';
import { CheckBox } from '../../../../../../shared/components/atoms/Checkbox';

type FieldValues = {
  title: string;
  attempts: number;
};

const GeneralTab = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FieldValues>();

  // FUNCTIONS
  const onSubmit = (data: any) => console.log(data);

  return (
    <form id="form-form" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        style={{ marginBottom: 16, maxWidth: 320 }}
        {...register('title', { required: true })}
        placeholder="Adicione um nome para o formulário"
        label="Nome do formulário"
      />
      <NumericFormInput
        {...register('attempts', { required: true })}
        placeholder="Selecione o número de tentativas"
        label="Número de tentativas"
      />
      <CheckBox
        style={{ marginTop: 16 }}
        label="Enviar feedback instantâneamente após resposta"
      />
    </form>
  );
};

export { GeneralTab };
