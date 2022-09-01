import {
  IListQuestionsAPI,
  IListQuestionsDTO,
} from 'layers/signed/modules/questionBank/interfaces/dtos/questions.list.dtos';
import { IQuestionsRepository } from 'layers/signed/modules/questionBank/repositories/IQuestions.repository';
import { useCallback } from 'react';
import { APIStatus } from 'shared/hooks/useApiStatus';
import { getListAPIStatus } from 'shared/utils/apis/getListAPIStatus';
import { ReplacePaginationFunction } from 'shared/hooks/usePagination';
import { useListQuestionsUseCase } from './listQuestions.useCase';

type useListQuestionsController = {
  repository: IQuestionsRepository;
  changeStatus: (status: APIStatus) => void;
  replacePagination: ReplacePaginationFunction;
};

export const useQuestionsController = ({
  repository,
  changeStatus,
  replacePagination,
}: useListQuestionsController) => {
  const { execute } = useListQuestionsUseCase(repository);

  const handle = useCallback(
    async ({ page, search }: IListQuestionsDTO) => {
      try {
        changeStatus(getListAPIStatus(page));

        const response = await execute({ page, search });

        const { meta } = response.data;
        // replacePagination({
        //   page: meta.current_page,
        //   lastPage: meta.last_page,
        // });

        changeStatus('success');

        return response;
      } catch (err) {
        changeStatus('error');
      }

      return {} as IListQuestionsAPI;
    },
    [changeStatus, execute, replacePagination],
  );

  return { handle };
};
