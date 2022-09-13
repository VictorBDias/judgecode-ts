import React from 'react';

import { Tooltip } from '@chakra-ui/react';
import { FormInput, NumericFormInput } from 'shared/components/atoms';
import { CheckBox } from 'shared/components/atoms/Checkbox';
import { CheckBoxesContainer } from './generalTab.styles';

type FieldValues = {
  title: string;
  attempts: number;
};

const GeneralTab = ({ activeControls, register, initialData }: any) => {
  const { isActive, setIsActive } = activeControls;

  return (
    <>
      <FormInput
        style={{ marginBottom: 16, maxWidth: 320 }}
        {...register('name', { required: true })}
        placeholder="Adicione um nome para o formulário"
        label="Nome do formulário"
        defaultValue={initialData && initialData.name}
      />
      <FormInput
        style={{ marginBottom: 16, maxWidth: 320 }}
        {...register('description', { required: true })}
        placeholder="Adicione uma descrição formulário"
        label="Descrição do formulário"
        defaultValue={initialData && initialData.description}
      />
      <NumericFormInput
        {...register('attempts', { required: true })}
        placeholder="Selecione o número de tentativas"
        label="Número de tentativas"
        min={1}
        defaultValue={1}
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
    </>
  );
};

export { GeneralTab };
