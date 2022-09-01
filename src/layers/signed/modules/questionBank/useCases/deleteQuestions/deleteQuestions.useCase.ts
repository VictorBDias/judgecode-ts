import { deleteQuestionsAPI } from 'layers/signed/modules/questionBank/apis/questions.apis';
import { IDeleteQuestionsDTO } from 'layers/signed/modules/questionBank/interfaces/dtos/questions.delete.dtos';
import { IQuestionsRepository } from 'layers/signed/modules/questionBank/repositories/IQuestions.repository';
import { useCallback } from 'react';

export const useDeleteQuestionsUseCase = ({
  destroy,
}: IQuestionsRepository) => {
  const execute = useCallback(
    async ({ id }: IDeleteQuestionsDTO) => {
      const response = await deleteQuestionsAPI({ id });
      destroy(id);
      return response;
    },
    [destroy],
  );

  return { execute };
};
