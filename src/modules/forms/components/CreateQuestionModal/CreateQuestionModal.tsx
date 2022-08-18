import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// CUSTOM IMPORTS
import { Modal } from '../../../../shared/components/molecules';
import { useCreateQuestion } from '../../../createQuestion/contexts/CreateQuestion.context';
import { QuestionTypes } from './createQuestion.interfaces';
import { useQuestionsRender } from '../../../createQuestion/hooks/useQuestion';

const CreateQuestionModal = ({ show, onClose }: any) => {
  const { codeEditorContent } = useCreateQuestion();

  const [questionType, setQuestionType] = useState<QuestionTypes>('codeEditor');
  return (
    <Modal title="Criar Questão" size="full" show={show} onClose={onClose}>
      {useQuestionsRender(questionType, setQuestionType)}
    </Modal>
  );
};
export { CreateQuestionModal };
