import { useAuth } from 'modules/auth/contexts';
import { useQuestions } from 'modules/questionBank/hooks/useQuestionBank';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, FormInput, Typography } from 'shared/components/atoms';
import { CodeEditor } from 'shared/components/organisms/CodeEditor';
import { useCreateQuestion } from '../../contexts/CreateQuestion.context';

type FieldValues = {
  description: string;
};

const CodeEditorForm = ({ initialData, onClose }: any) => {
  const { user } = useAuth();
  const { createQuestion, updateQuestion } = useQuestions();
  const { register, handleSubmit } = useForm<any>();
  const { language } = useCreateQuestion();
  const [questionCode, setQuestionCode] = useState(
    initialData && initialData.body,
  );
  const onSubmit = handleSubmit(async (data: FieldValues) => {
    if (user) {
      if (initialData) {
        if (user.id === initialData.owner_id) {
          updateQuestion({
            id: initialData.id,
            data: {
              id: initialData.id,
              title: data.description,
              body: questionCode,
              category_id: '33b5bb58-ebaf-4026-a90d-58139dbe86ca',
              owner_id: user.id,
              language,
              ...data,
            },
          });
        } else {
          createQuestion({
            title: data.description,
            body: questionCode,
            category_id: '33b5bb58-ebaf-4026-a90d-58139dbe86ca',
            owner_id: user.id,
            language,
          });
        }
      } else {
        createQuestion({
          title: data.description,
          body: questionCode,
          category_id: '33b5bb58-ebaf-4026-a90d-58139dbe86ca',
          owner_id: user.id,
          language,
        });
      }
    }
    onClose();
  });

  return (
    <form id="code-form" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        style={{ marginBottom: 16, maxWidth: 600 }}
        {...register('description', { required: true })}
        placeholder="Adicione uma descrição para questão"
        label="Descrição"
        defaultValue={initialData && initialData.title}
      />
      <CodeEditor
        initialData={initialData}
        mode="javascript"
        value={questionCode}
        onChange={(value) => setQuestionCode(value)}
      />

      <Button
        type="submit"
        color="secondaryObj"
        size="md"
        variant="solid"
        style={{ marginTop: 24 }}
      >
        <Typography variant="whiteSubTitle">Salvar</Typography>
      </Button>
    </form>
  );
};

export { CodeEditorForm };
