import { IQuestion } from 'shared/interfaces/questions.interfaces';

export interface IForm {
  id: string;
  name: string;
  description: string;
  problems: IQuestion[];
}
