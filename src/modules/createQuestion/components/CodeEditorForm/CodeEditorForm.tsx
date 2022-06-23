import React from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from 'shared/components/atoms';
import { CodeEditor } from '../../../../shared/components/organisms/CodeEditor';
import { useCreateQuestion } from '../../contexts/CreateQuestion.context';

// import { Container } from './styles';
type FieldValues = {
  description: string;
};

const CodeEditorForm = () => {
  const { register } = useForm<FieldValues>();
  const { codeEditorContent, setCodeEditorContent } = useCreateQuestion();

  return (
    <form id="form-form" onSubmit={(data) => console.log(data)}>
      <FormInput
        style={{ marginBottom: 16, maxWidth: 600 }}
        {...register('description', { required: true })}
        placeholder="Adicione descrição para questão"
        label="Descrição"
      />
      <CodeEditor
        mode="javascript"
        value={codeEditorContent}
        onChange={(value) => console.log(value)}
      />
    </form>
  );
};

export { CodeEditorForm };
