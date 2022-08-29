import { APIResponse } from 'shared/interfaces/dtos';
import { IForm } from '../forms.interfaces';

export type IUpdateFormsAPI = APIResponse<IForm>;

export type IUpdateFormsDTO = {
  id: string;
  data: IForm;
};
