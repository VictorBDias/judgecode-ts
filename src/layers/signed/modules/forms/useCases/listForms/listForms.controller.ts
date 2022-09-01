import { useCallback } from 'react';
import { APIStatus } from 'shared/hooks/useApiStatus';
import { getListAPIStatus } from 'shared/utils/apis/getListAPIStatus';
import { ReplacePaginationFunction } from 'shared/hooks/usePagination';
import { IFormsRepository } from 'layers/signed/modules/forms/repositories/IForms.repository';
import {
  IListFormsAPI,
  IListFormsDTO,
} from 'layers/signed/modules/forms/interfaces/dtos/forms.list.dtos';
import { useListFormsUseCase } from './listForms.useCase';

type useListFormsController = {
  repository: IFormsRepository;
  changeStatus: (status: APIStatus) => void;
  replacePagination: ReplacePaginationFunction;
};

export const useFormsController = ({
  repository,
  changeStatus,
  replacePagination,
}: useListFormsController) => {
  const { execute } = useListFormsUseCase(repository);

  const handle = useCallback(
    async ({ page, search }: IListFormsDTO) => {
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

      return {} as IListFormsAPI;
    },
    [changeStatus, execute, replacePagination],
  );

  return { handle };
};
