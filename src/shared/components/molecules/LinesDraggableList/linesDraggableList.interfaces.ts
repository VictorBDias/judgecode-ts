type IOrderCodeQuestion = any;

export interface linesDraggableListProps {
  title: string;
  data: any;
  onAdd?: any;
  onDelete?: any;
  onDragFinish?: any;
  initialData?: IOrderCodeQuestion;
  readOnly?: boolean;
}
