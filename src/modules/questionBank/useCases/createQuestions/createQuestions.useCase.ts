import { createQuestionsAPI } from 'modules/questionBank/apis/questions.apis';
import { ICreateQuestionsDTO } from 'modules/questionBank/interfaces/dtos/questions.create.dtos';
import { IQuestionsRepository } from 'modules/questionBank/repositories/IQuestions.repository';
import { useCallback } from 'react';

export const useCreateQuestionsUseCase = ({ create }: IQuestionsRepository) => {
  const execute = useCallback(async (data: ICreateQuestionsDTO) => {
    const response = await createQuestionsAPI(data);
    create(response.data);
    return response;
  }, []);

  return { execute };
};
