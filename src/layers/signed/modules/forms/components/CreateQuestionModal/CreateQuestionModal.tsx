import React, { useState } from 'react';

import { Modal } from 'shared/components/molecules';
import { QuestionTypes } from './createQuestion.interfaces';
import { useQuestionsRender } from '../../../createQuestion/hooks/useQuestion';
import { handleQuestionType } from './utils/handleQuestionType';

const CreateQuestionModal = ({
  show,
  onClose,
  initialData,
  createQuestion,
  updateQuestion,
}: any) => {
  console.log(initialData);
  const [questionType, setQuestionType] = useState<QuestionTypes>(
    initialData && initialData.category
      ? handleQuestionType(initialData.category.name)
      : 'codeEditor',
  );
  return (
    <Modal title="Criar Questão" size="full" show={show} onClose={onClose}>
      {useQuestionsRender({
        questionType,
        setQuestionType,
        initialData,
        onClose,
        createQuestion,
        updateQuestion,
      })}
    </Modal>
  );
};
export { CreateQuestionModal };
