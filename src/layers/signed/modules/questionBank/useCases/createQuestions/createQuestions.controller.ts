import {
  ICreateQuestionsAPI,
  ICreateQuestionsDTO,
} from 'layers/signed/modules/questionBank/interfaces/dtos/questions.create.dtos';
import { IQuestionsRepository } from 'layers/signed/modules/questionBank/repositories/IQuestions.repository';
import { useCallback } from 'react';
import { ChangeStatusFunction } from 'shared/hooks/useApiStatus';
import { useCreateQuestionsUseCase } from './createQuestions.useCase';

export const useCreateQuestionsController = (
  repository: IQuestionsRepository,
  changeStatus: ChangeStatusFunction,
) => {
  const { execute } = useCreateQuestionsUseCase(repository);

  const handle = useCallback(
    async (questionsData: ICreateQuestionsDTO) => {
      try {
        changeStatus('creating');
        const response = await execute(questionsData);
        changeStatus('createSuccess');
        return response;
      } catch (err) {
        changeStatus('error');
      }

      return {} as ICreateQuestionsAPI;
    },
    [changeStatus, execute],
  );

  return { handle };
};
