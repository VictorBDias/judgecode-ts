import { IQuestion } from '../../../shared/interfaces/questions.interfaces';

export interface IQuestionsRepository {
  appendList: (questionList: IQuestion[]) => void;
  replaceList: (questionList: IQuestion[]) => void;
  destroy: (questionId: string) => void;
  create: (question: IQuestion) => void;
  update: (questionId: string, data: IQuestion) => void;
  questions: IQuestion[];
}
