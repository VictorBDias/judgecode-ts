import { IQuestion } from '../../../../../shared/interfaces/questions.interfaces';
import { ICreateQuestionsDTO } from '../interfaces/dtos/questions.create.dtos';

export interface IQuestionsRepository {
  appendList: (questionList: IQuestion[]) => void;
  replaceList: (questionList: IQuestion[]) => void;
  destroy: (questionId: string) => void;
  create: (question: IQuestion | ICreateQuestionsDTO) => void;
  update: (questionId: string, data: IQuestion) => void;
  questions: IQuestion[];
}
