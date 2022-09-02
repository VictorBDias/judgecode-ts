import { IQuestion } from 'shared/interfaces/questions.interfaces';
import React, { useState } from 'react';
import { Select } from '../../../../../shared/components/atoms';
import { QuestionTypes } from '../../forms/components/CreateQuestionModal/createQuestion.interfaces';
import { CodeEditorForm } from '../components/CodeEditorForm/CodeEditorForm';
import { OrderCodeForm } from '../components/OrderCodeForm/OrderCodeForm';
import { TestQuestionForm } from '../components/TestQuestionForm/CodeEditorForm';

const questionTypes = [
  {
    id: 1,
    label: 'Editor de código',
    value: 'codeEditor',
  },
  {
    id: 2,
    label: 'Ordenar código',
    value: 'orderCode',
  },
  {
    id: 3,
    label: 'Teste',
    value: 'test',
  },
];

export type QuestionsRenderType = {
  questionType?: QuestionTypes;
  setQuestionType: (type: QuestionTypes) => void;
  initialData?: IQuestion;
  onClose?: () => void;
  createQuestion?: (question: IQuestion) => void;
  updateQuestion?: (questionId: string, data: IQuestion) => void;
};

const handleRenderQuestion = ({
  questionType,
  initialData,
  onClose,
  createQuestion,
  updateQuestion,
}: Omit<QuestionsRenderType, 'setQuestionType'>) => {
  switch (questionType) {
    case 'codeEditor':
      return (
        <CodeEditorForm
          initialData={initialData}
          onClose={onClose}
          createQuestion={createQuestion}
          updateQuestion={updateQuestion}
        />
      );

    case 'orderCode':
      return <OrderCodeForm />;

    case 'test':
      return <TestQuestionForm />;

    default:
      break;
  }
};

export const useQuestionsRender = ({
  questionType,
  setQuestionType,
  initialData,
  onClose,
  createQuestion,
  updateQuestion,
}: QuestionsRenderType) => (
  <div style={{ marginLeft: 24 }}>
    <div style={{ marginBottom: 16 }}>
      <Select
        options={questionTypes}
        value={questionType}
        onChange={(e: any) => setQuestionType(e.target.value)}
      />
    </div>
    {handleRenderQuestion({
      questionType,
      initialData,
      onClose,
      createQuestion,
      updateQuestion,
    })}
  </div>
);
