import { QuestionTypes } from '../createQuestion.interfaces';

export const handleQuestionType = (type: string): QuestionTypes => {
  switch (type) {
    case 'Editor de Código':
      return 'codeEditor';

    default:
      return 'codeEditor';
  }
};
