import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// CUSTOM IMPORTS
import { Container } from './createQuestion.styles';
import { Select, Typography } from '../../shared/components/atoms';
import { FooterButtons } from '../../shared/components/molecules';
import { CodeEditorForm } from './components/CodeEditorForm/CodeEditorForm';

const questionTypes = [
  {
    id: 1,
    label: 'Editor de código',
    value: 'codeEditor',
  },
];

const CreateQuestion = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<any>();
  const [language, setLanguage] = useState(questionTypes[0]);

  const handleRenderQuestion = () => {
    switch (language.value) {
      case 'codeEditor':
        return <CodeEditorForm />;

      default:
        break;
    }
  };

  const onSubmit = (data: any) => console.log(data);
  return (
    <Container>
      <Typography variant="title" style={{ marginBottom: 16, marginTop: 40 }}>
        Criar Questão
      </Typography>
      <div style={{ marginBottom: 16 }}>
        <Select
          options={questionTypes}
          value={language}
          onChange={(e: any) => setLanguage(e.target.value)}
        />
      </div>
      <form id="question-form" onSubmit={onSubmit}>
        {handleRenderQuestion()}
      </form>
      <FooterButtons
        formId="question-form"
        type="submit"
        onCancel={() => console.log('cancel')}
      />
    </Container>
  );
};
export { CreateQuestion };
