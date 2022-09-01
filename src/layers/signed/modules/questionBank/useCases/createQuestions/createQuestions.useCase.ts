import { createQuestionsAPI } from 'layers/signed/modules/questionBank/apis/questions.apis';
import { ICreateQuestionsDTO } from 'layers/signed/modules/questionBank/interfaces/dtos/questions.create.dtos';
import { IQuestionsRepository } from 'layers/signed/modules/questionBank/repositories/IQuestions.repository';
import { useCallback } from 'react';

export const useCreateQuestionsUseCase = ({ create }: IQuestionsRepository) => {
  const execute = useCallback(async (data: ICreateQuestionsDTO) => {
    const response = await createQuestionsAPI(data);
    create(response.data);
    return response;
  }, []);

  return { execute };
};
