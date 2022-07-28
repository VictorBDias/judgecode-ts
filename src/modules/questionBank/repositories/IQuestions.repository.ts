export interface IQuestionsRepository {
  appendList: (questionList: any[]) => void;
  replaceList: (questionList: any[]) => void;
  destroy: (questionId: number) => void;
  create: (question: any) => void;
  update: (questionId: number | string, data: any) => void;
  questions: any[];
}
