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
