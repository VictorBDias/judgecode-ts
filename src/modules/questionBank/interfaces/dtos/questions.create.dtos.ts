import { APIResponse } from 'shared/interfaces/dtos';
import { IQuestion } from '../questions.interfaces';

export type ICreateQuestionsAPI = APIResponse<{
  data: IQuestion;
}>;
export type ICreateQuestionsDTO = {
  title: string;
  body: string;
  language?: string;
  owner_id: string;
  category_id: string;
};
