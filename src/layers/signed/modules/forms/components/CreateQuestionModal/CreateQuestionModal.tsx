import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// CUSTOM IMPORTS
import { Modal } from '../../../../../../shared/components/molecules';
import { useCreateQuestion } from '../../../createQuestion/contexts/CreateQuestion.context';
import { QuestionTypes } from './createQuestion.interfaces';
import { useQuestionsRender } from '../../../createQuestion/hooks/useQuestion';
import { handleQuestionType } from './utils/handleQuestionType';

const CreateQuestionModal = ({ show, onClose, initialData }: any) => {
  const [questionType, setQuestionType] = useState<QuestionTypes>(
    initialData ? handleQuestionType(initialData.category.name) : 'codeEditor',
  );
  return (
    <Modal title="Criar Questão" size="full" show={show} onClose={onClose}>
      {useQuestionsRender(questionType, setQuestionType, initialData, onClose)}
    </Modal>
  );
};
export { CreateQuestionModal };
