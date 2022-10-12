import { IQuestion } from 'shared/interfaces/questions.interfaces';

export const handleFormatFormQuestions = (questions: IQuestion[]) => {
  const formattedQuestions = <any>[];
  questions.map((question) => {
    const { body, owner_id, title, category, category_id, language, owner } =
      question;
    formattedQuestions.push({
      body,
      owner_id,
      title,
      category,
      category_id,
      language,
      owner,
    });
    return null;
  });
  return formattedQuestions;
};
export const handleFormatPutQuestions = ({ questions, categoryId }: any) => {
  const formattedQuestions = <any>[];
  questions.map((question: IQuestion) => {
    const { id, body, owner_id, title, category, language, owner } = question;
    formattedQuestions.push({
      id,
      body,
      owner_id,
      title,
      category,
      category_id: categoryId,
      language,
      owner,
    });
    return null;
  });
  return formattedQuestions;
};
