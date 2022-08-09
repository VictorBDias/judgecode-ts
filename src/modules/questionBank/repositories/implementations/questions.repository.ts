import { useState } from 'react';

import { useSideEffects } from 'shared/hooks/useSideEffects';

import { IQuestion } from 'modules/questionBank/interfaces/questions.interfaces';
import { IQuestionsRepository } from '../IQuestions.repository';

export const useQuestionsRepository = (): IQuestionsRepository => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const { append, appendList, create, destroy, replaceList, update } =
    useSideEffects<IQuestion>(setQuestions);

  return {
    questions,
    appendList,
    create,
    destroy,
    replaceList,
    update,
  };
};
