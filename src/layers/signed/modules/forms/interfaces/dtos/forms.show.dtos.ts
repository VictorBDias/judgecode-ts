import { APIResponse } from 'shared/interfaces/dtos';
import { IForm } from '../forms.interfaces';

export type IShowFormsDTO = {
  id: string;
};

export type IShowFormsAPI = APIResponse<IForm>;
