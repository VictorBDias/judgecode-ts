import {
  IDeleteFormsAPI,
  IDeleteFormsDTO,
} from 'modules/forms/interfaces/dtos/forms.delete.dtos';
import { IFormsRepository } from 'modules/forms/repositories/IForms.repository';
import { useCallback } from 'react';
import { ChangeStatusFunction } from 'shared/hooks/useApiStatus';
import { useDeleteFormsUseCase } from './deleteForms.useCase';

export const useDeleteFormsController = (
  repository: IFormsRepository,
  changeStatus: ChangeStatusFunction,
) => {
  const { execute } = useDeleteFormsUseCase(repository);

  const handle = useCallback(
    async ({ id }: IDeleteFormsDTO) => {
      try {
        changeStatus('deleting');
        const response = await execute({ id });
        changeStatus('deleteSuccess');
        return response;
      } catch (err) {
        changeStatus('error');
      }

      return {} as IDeleteFormsAPI;
    },
    [changeStatus, execute],
  );

  return { handle };
};
