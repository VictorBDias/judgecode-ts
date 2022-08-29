import {
  IUpdateFormsAPI,
  IUpdateFormsDTO,
} from 'modules/forms/interfaces/dtos/forms.update.dtos';
import { IFormsRepository } from 'modules/forms/repositories/IForms.repository';
import { useCallback } from 'react';
import { ChangeStatusFunction } from 'shared/hooks/useApiStatus';
import { useUpdateFormsUseCase } from './updateForms.useCase';

export const useUpdateFormsController = (
  repository: IFormsRepository,
  changeStatus: ChangeStatusFunction,
) => {
  const { execute } = useUpdateFormsUseCase(repository);

  const handle = useCallback(
    async ({ id, data }: IUpdateFormsDTO) => {
      try {
        changeStatus('updateSuccess');
        const response = await execute({ id, data });
        changeStatus('updateSuccess');
        return response;
      } catch (err) {
        changeStatus('error');
      }

      return {} as IUpdateFormsAPI;
    },
    [changeStatus, execute],
  );

  return { handle };
};
