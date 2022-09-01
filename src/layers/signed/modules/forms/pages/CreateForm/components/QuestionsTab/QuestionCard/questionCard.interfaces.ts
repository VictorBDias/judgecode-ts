import { IQuestion } from 'shared/interfaces/questions.interfaces';

export interface IQuestionCardProps {
  id: string;
  title: string;
  tag?: string;
  onEdit?: () => void;
  onDelete?: () => {};
}
