import { listFormsAPI } from 'modules/forms/apis/forms.apis';
import { IListFormsDTO } from 'modules/forms/interfaces/dtos/forms.list.dtos';
import { IFormsRepository } from 'modules/forms/repositories/IForms.repository';
import { useCallback } from 'react';

export const useListFormsUseCase = ({
  replaceList,
  appendList,
}: IFormsRepository) => {
  const execute = useCallback(
    async ({ page, search }: IListFormsDTO) => {
      const response = await listFormsAPI({ page, search });
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
