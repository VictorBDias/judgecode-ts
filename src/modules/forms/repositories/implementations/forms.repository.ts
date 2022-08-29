import { IForm } from 'modules/forms/interfaces/forms.interfaces';
import { useState } from 'react';

import { useSideEffects } from 'shared/hooks/useSideEffects';
import { IFormsRepository } from '../IForms.repository';

export const useFormsRepository = (): IFormsRepository => {
  const [data, setData] = useState<IForm[]>([]);
  const { appendList, create, destroy, replaceList, update } =
    useSideEffects<IForm>(setData);

  return {
    forms: data,
    appendList,
    create,
    destroy,
    replaceList,
    update,
  };
};
