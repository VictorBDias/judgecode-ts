import {
  ICreateFormsAPI,
  ICreateFormsDTO,
} from 'layers/signed/modules/forms/interfaces/dtos/forms.create.dtos';
import { IFormsRepository } from 'layers/signed/modules/forms/repositories/IForms.repository';
import { useCallback } from 'react';
import { ChangeStatusFunction } from 'shared/hooks/useApiStatus';
import { useCreateFormsUseCase } from './createForms.useCase';

export const useCreateFormsController = (
  repository: IFormsRepository,
  changeStatus: ChangeStatusFunction,
) => {
  const { execute } = useCreateFormsUseCase(repository);

  const handle = useCallback(
    async (FormsData: ICreateFormsDTO) => {
      try {
        changeStatus('creating');
        const response = await execute(FormsData);
        changeStatus('createSuccess');
        return response;
      } catch (err) {
        changeStatus('error');
      }

      return {} as ICreateFormsAPI;
    },
    [changeStatus, execute],
  );

  return { handle };
};
