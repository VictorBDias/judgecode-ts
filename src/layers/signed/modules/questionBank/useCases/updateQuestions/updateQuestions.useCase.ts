import { updateQuestionsAPI } from 'layers/signed/modules/questionBank/apis/questions.apis';
import { IUpdateQuestionsDTO } from 'layers/signed/modules/questionBank/interfaces/dtos/questions.update.dtos';
import { IQuestionsRepository } from 'layers/signed/modules/questionBank/repositories/IQuestions.repository';
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
