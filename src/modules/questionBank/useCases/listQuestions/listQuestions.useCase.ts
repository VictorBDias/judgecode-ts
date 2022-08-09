import { listQuestionsAPI } from 'modules/questionBank/apis/questions.apis';
import { IListQuestionsDTO } from 'modules/questionBank/interfaces/dtos/questions.list.dtos';
import { IQuestionsRepository } from 'modules/questionBank/repositories/IQuestions.repository';
import { useCallback } from 'react';

export const useListQuestionsUseCase = ({
  replaceList,
  appendList,
}: IQuestionsRepository) => {
  const execute = useCallback(
    async ({ page, search }: IListQuestionsDTO) => {
      const response = await listQuestionsAPI({ page, search });
      const isPaging = page > 1;

      if (isPaging) {
        appendList(response.data.data);
      } else {
        replaceList(response.data.data);
      }

      return response;
    },
    [appendList, replaceList],
  );

  return { execute };
};
