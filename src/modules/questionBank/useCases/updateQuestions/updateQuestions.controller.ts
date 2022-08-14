import {
  IUpdateQuestionsAPI,
  IUpdateQuestionsDTO,
} from 'modules/questionBank/interfaces/dtos/questions.update.dtos';
import { IQuestionsRepository } from 'modules/questionBank/repositories/IQuestions.repository';
import { useCallback } from 'react';
import { ChangeStatusFunction } from 'shared/hooks/useApiStatus';
import { useUpdateQuestionsUseCase } from './updateQuestions.useCase';

export const useUpdateQuestionsController = (
  repository: IQuestionsRepository,
  changeStatus: ChangeStatusFunction,
) => {
  const { execute } = useUpdateQuestionsUseCase(repository);

  const handle = useCallback(
    async ({ id, data }: IUpdateQuestionsDTO) => {
      try {
        changeStatus('updateSuccess');
        const response = await execute({ id, data });
        changeStatus('updateSuccess');
        return response;
      } catch (err) {
        changeStatus('error');
      }

      return {} as IUpdateQuestionsAPI;
    },
    [changeStatus, execute],
  );

  return { handle };
};
