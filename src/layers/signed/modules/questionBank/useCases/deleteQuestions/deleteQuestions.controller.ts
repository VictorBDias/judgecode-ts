import {
  IDeleteQuestionsAPI,
  IDeleteQuestionsDTO,
} from 'layers/signed/modules/questionBank/interfaces/dtos/questions.delete.dtos';
import { IQuestionsRepository } from 'layers/signed/modules/questionBank/repositories/IQuestions.repository';
import { useCallback } from 'react';
import { ChangeStatusFunction } from 'shared/hooks/useApiStatus';
import { useDeleteQuestionsUseCase } from './deleteQuestions.useCase';

export const useDeleteQuestionsController = (
  repository: IQuestionsRepository,
  changeStatus: ChangeStatusFunction,
) => {
  const { execute } = useDeleteQuestionsUseCase(repository);

  const handle = useCallback(
    async ({ id }: IDeleteQuestionsDTO) => {
      try {
        changeStatus('deleting');
        const response = await execute({ id });
        changeStatus('deleteSuccess');
        return response;
      } catch (err) {
        changeStatus('error');
      }

      return {} as IDeleteQuestionsAPI;
    },
    [changeStatus, execute],
  );

  return { handle };
};
