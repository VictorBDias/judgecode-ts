import { updateQuestionsAPI } from 'modules/questionBank/apis/questions.apis';
import { IUpdateQuestionsDTO } from 'modules/questionBank/interfaces/dtos/questions.update.dtos';
import { IQuestionsRepository } from 'modules/questionBank/repositories/IQuestions.repository';
import { useCallback } from 'react';

export const useUpdateQuestionsUseCase = ({ update }: IQuestionsRepository) => {
  const execute = useCallback(
    async ({ id, data }: IUpdateQuestionsDTO) => {
      const response = await updateQuestionsAPI({ id, data });
      update(id, response.data);
      return response;
    },
    [update],
  );

  return { execute };
};
