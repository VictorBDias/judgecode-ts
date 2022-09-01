import { createFormsAPI } from 'layers/signed/modules/forms/apis/forms.apis';
import { ICreateFormsDTO } from 'layers/signed/modules/forms/interfaces/dtos/forms.create.dtos';
import { IFormsRepository } from 'layers/signed/modules/forms/repositories/IForms.repository';
import { useCallback } from 'react';

export const useCreateFormsUseCase = ({ create }: IFormsRepository) => {
  const execute = useCallback(async (data: ICreateFormsDTO) => {
    const response = await createFormsAPI(data);
    create(response.data);
    return response;
  }, []);

  return { execute };
};
