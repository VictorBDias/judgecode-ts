import { updateFormsAPI } from 'modules/forms/apis/forms.apis';
import { IUpdateFormsDTO } from 'modules/forms/interfaces/dtos/forms.update.dtos';
import { IFormsRepository } from 'modules/forms/repositories/IForms.repository';
import { useCallback } from 'react';

export const useUpdateFormsUseCase = ({ update }: IFormsRepository) => {
  const execute = useCallback(
    async ({ id, data }: IUpdateFormsDTO) => {
      const response = await updateFormsAPI({ id, data });
      update(id, response.data);
      return response;
    },
    [update],
  );

  return { execute };
};
