import { APIResponse } from 'shared/interfaces/dtos';
import { IQuestion } from '../../../../../../shared/interfaces/questions.interfaces';

export type ICreateQuestionsAPI = APIResponse<IQuestion>;
export type ICreateQuestionsDTO = {
  title: string;
  body: string;
  language?: string;
  owner_id: string;
  category_id?: string;
};
