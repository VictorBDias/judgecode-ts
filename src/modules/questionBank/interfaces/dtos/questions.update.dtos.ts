import { APIResponse } from 'shared/interfaces/dtos';
import { IQuestion } from '../../../../shared/interfaces/questions.interfaces';

export type IUpdateQuestionsAPI = APIResponse<IQuestion>;

export type IUpdateQuestionsDTO = {
  id: string;
  data: IQuestion;
};
