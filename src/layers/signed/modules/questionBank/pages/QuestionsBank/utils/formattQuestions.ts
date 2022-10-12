export const handleFormatQuestions = ({ questions }: any) => {
  const formattedQuestions = <any>[];
  // eslint-disable-next-line array-callback-return
  questions.map((question: any) => {
    const { category_id } = question;
    if (category_id === null) formattedQuestions.push(question);
  });
  return formattedQuestions;
};
