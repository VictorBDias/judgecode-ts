import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from 'shared/components/atoms';
import { LinesDraggableList } from '../../../../shared/components/molecules';
import { CodeEditor } from '../../../../shared/components/organisms/CodeEditor';
import { useCreateQuestion } from '../../contexts/CreateQuestion.context';
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
    },
  ],
};
const mockData = [
  { id: 1, content: 'var length = items.length;' },
  { id: 2, content: 'for (var i = 0; i < length; i++)' },
  { id: 3, content: 'for (var j = 0; j < (length - i - 1); j++)' },
  { id: 4, content: 'if(items[j] > items[j+1]) var tmp = items[j]' },
  { id: 5, content: '  items[j] = items[j+1]; items[j+1] = tmp' },
];

const OrderCodeForm = () => {
  const { register } = useForm<FieldValues>();
  const [codeBlock, setCodeBlock] = useState(INITIAL_DATA);
  const { addLine, deleteLine, reorderLines } = useOrderHandlers(setCodeBlock);

  return (
    <form id="form-form" onSubmit={(data) => console.log(data)}>
      <FormInput
        style={{ marginBottom: 16, maxWidth: 600 }}
        {...register('description', { required: true })}
        placeholder="Adicione descrição para questão"
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
