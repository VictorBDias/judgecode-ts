import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from 'shared/components/atoms';
import { LinesDraggableList } from '../../../../shared/components/molecules';
import { useOrderHandlers } from './hooks/useOrderHandlers';

type FieldValues = {
  description: string;
};

const INITIAL_DATA = {
  linesCount: 1,
  lines: [
    {
      id: 1,
      name: 'newline#1',
      content: '',
    },
  ],
};

const OrderCodeForm = () => {
  const { register } = useForm<FieldValues>();
  const [codeBlock, setCodeBlock] = useState(INITIAL_DATA);
  const { addLine, deleteLine, reorderLines } = useOrderHandlers(setCodeBlock);

  return (
    <form id="form-form" onSubmit={(data) => console.log(data)}>
      <FormInput
        style={{ marginBottom: 16, maxWidth: 600 }}
        {...register('description', { required: true })}
        placeholder="Adicione uma descrição para questão"
        label="Descrição"
      />
      <LinesDraggableList
        data={codeBlock.lines}
        onAdd={addLine}
        onDelete={deleteLine}
        onDragFinish={reorderLines}
      />
    </form>
  );
};

export { OrderCodeForm };
