import React, { useState } from 'react';
import { Select } from '../../../shared/components/atoms';
import { QuestionTypes } from '../../forms/components/CreateQuestionModal/createQuestion.interfaces';
import { CodeEditorForm } from '../components/CodeEditorForm/CodeEditorForm';
import { TestQuestionForm } from '../components/TestQuestionForm/CodeEditorForm';

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

const handleRenderQuestion = (questionType: QuestionTypes) => {
  switch (questionType) {
    case 'codeEditor':
      return <CodeEditorForm />;

    case 'test':
      return <TestQuestionForm />;

    default:
      break;
  }
};

export const useQuestionsRender = (
  questionType: QuestionTypes,
  onSubmit: (data: any) => void,
  setQuestionType: (type: QuestionTypes) => void,
) => (
  <div style={{ marginLeft: 24 }}>
    <div style={{ marginBottom: 16 }}>
      <Select
        options={questionTypes}
        value={questionType}
        onChange={(e: any) => setQuestionType(e.target.value)}
      />
    </div>
    <form id="question-form" onSubmit={onSubmit}>
      {handleRenderQuestion(questionType)}
    </form>
  </div>
);
