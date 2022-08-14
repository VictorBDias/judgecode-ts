import { APIResponse } from 'shared/interfaces/dtos';
import { IQuestion } from '../questions.interfaces';

export type IUpdateQuestionsAPI = APIResponse<{
  data: IQuestion;
}>;

export type IUpdateQuestionsDTO = {
  id: string;
  data: IQuestion;
};
