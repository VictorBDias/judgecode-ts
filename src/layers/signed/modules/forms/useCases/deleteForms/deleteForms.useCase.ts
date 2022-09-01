import { deleteFormsAPI } from 'layers/signed/modules/forms/apis/forms.apis';
import { IDeleteFormsDTO } from 'layers/signed/modules/forms/interfaces/dtos/forms.delete.dtos';
import { IFormsRepository } from 'layers/signed/modules/forms/repositories/IForms.repository';
import { useCallback } from 'react';

export const useDeleteFormsUseCase = ({ destroy }: IFormsRepository) => {
  const execute = useCallback(
    async ({ id }: IDeleteFormsDTO) => {
      const response = await deleteFormsAPI({ id });
      destroy(id);
      return response;
    },
    [destroy],
  );

  return { execute };
};
