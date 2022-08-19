import { IQuestion } from 'modules/questionBank/interfaces/questions.interfaces';

export interface IQuestionCardProps {
  id: string;
  title: string;
  tag?: string;
  onEdit?: () => void;
  onDelete?: () => {};
}
