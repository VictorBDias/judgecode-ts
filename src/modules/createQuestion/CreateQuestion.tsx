import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// CUSTOM IMPORTS
import { Container } from './createQuestion.styles';
import { Typography } from '../../shared/components/atoms';
import { FooterButtons } from '../../shared/components/molecules';
import { QuestionTypes } from '../forms/components/CreateQuestionModal/createQuestion.interfaces';
import { useQuestionsRender } from './hooks/useQuestion';
import { useCreateQuestion } from './contexts/CreateQuestion.context';

const questionTypes = [
  {
    id: 1,
    label: 'Editor de código',
    value: 'codeEditor',
  },
];

const TagsMock = [
  { id: 1, label: 'JavaScript' },
  { id: 2, label: 'C++' },
  { id: 3, label: 'TypeScript' },
];

const CreateQuestion = () => {
  const { codeEditorContent } = useCreateQuestion();

  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<any>();
  const [questionType, setQuestionType] = useState<QuestionTypes>('codeEditor');

  const onSubmit = (data: any) => console.log(codeEditorContent);
  return (
    <Container>
      <Typography variant="title" style={{ marginBottom: 16, marginTop: 40 }}>
        Criar Questão
      </Typography>
      {useQuestionsRender(questionType, onSubmit, setQuestionType)}
      <FooterButtons
        formId="question-form"
        type="submit"
        onCancel={() => console.log('cancel')}
      />
    </Container>
  );
};
export { CreateQuestion };
