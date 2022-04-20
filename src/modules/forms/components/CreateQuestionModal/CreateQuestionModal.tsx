import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// CUSTOM IMPORTS
import { Container } from './createQuestionModal.styles';
import { Select } from '../../../../shared/components/atoms';
import { Modal } from '../../../../shared/components/molecules';
import { CodeEditorForm } from '../../../createQuestion/components/CodeEditorForm/CodeEditorForm';
import { useCreateQuestion } from '../../../createQuestion/contexts/CreateQuestion.context';
import { TestQuestionForm } from '../../../createQuestion/components/TestQuestionForm/CodeEditorForm';

const questionTypes = [
  {
    id: 1,
    label: 'Editor de código',
    value: 'codeEditor',
  },
  {
    id: 2,
    label: 'Teste',
    value: 'test',
  },
];

const CreateQuestionModal = ({ show, onClose }: any) => {
  const { codeEditorContent } = useCreateQuestion();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<any>();
  const [questionType, setQuestionType] = useState('codeEditor');

  const handleRenderQuestion = () => {
    switch (questionType) {
      case 'codeEditor':
        return <CodeEditorForm />;

      case 'test':
        return <TestQuestionForm />;

      default:
        break;
    }
  };

  const onSubmit = (data: any) => console.log(codeEditorContent);
  return (
    <Modal
      title="Criar Questão"
      size="full"
      show={show}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <Container>
        <div style={{ marginBottom: 16 }}>
          <Select
            options={questionTypes}
            value={questionType}
            onChange={(e: any) => setQuestionType(e.target.value)}
          />
        </div>
        <form id="question-form" onSubmit={onSubmit}>
          {handleRenderQuestion()}
        </form>
      </Container>
    </Modal>
  );
};
export { CreateQuestionModal };
