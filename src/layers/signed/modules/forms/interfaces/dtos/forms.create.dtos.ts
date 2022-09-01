import { APIResponse } from 'shared/interfaces/dtos';
import { IQuestion } from 'shared/interfaces/questions.interfaces';
import { IForm } from '../forms.interfaces';

export type ICreateFormsAPI = APIResponse<IForm>;

export type ICreateFormsDTO = {
  name: string;
  description: string;
  problems?: IQuestion[];
};
