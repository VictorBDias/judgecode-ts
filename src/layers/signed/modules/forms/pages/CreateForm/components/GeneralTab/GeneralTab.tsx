import React from 'react';
import { useForm } from 'react-hook-form';

import { Tooltip } from '@chakra-ui/react';
import { FormInput, NumericFormInput } from 'shared/components/atoms';
import { CheckBox } from 'shared/components/atoms/Checkbox';
import { CheckBoxesContainer } from './generalTab.styles';

type FieldValues = {
  title: string;
  attempts: number;
};

const GeneralTab = ({ activeControls }: any) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FieldValues>();
  const { isActive, setIsActive } = activeControls;

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
      <CheckBoxesContainer>
        <Tooltip
          hasArrow
          label="Os alunos saberão do resultado assim que terminarem o formulário"
        >
          <div style={{ maxWidth: 400 }}>
            <CheckBox
              style={{ marginTop: 16 }}
              label="Enviar feedback instantâneamente após resposta"
            />
          </div>
        </Tooltip>
        <Tooltip label="Os alunos poderão acessar somente formulários ativos">
          <div style={{ maxWidth: 300 }}>
            <CheckBox
              isChecked={isActive}
              onChange={() => setIsActive(!isActive)}
              hasArrow
              style={{ marginTop: 16 }}
              label="Ativar formulário"
            />
          </div>
        </Tooltip>
      </CheckBoxesContainer>
    </form>
  );
};

export { GeneralTab };
