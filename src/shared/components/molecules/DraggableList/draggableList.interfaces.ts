export interface DraggableListProps {
  data: any[];
  isDragDisabled?: boolean;
  renderCell: any;
  onDragFinish: any;
  renderCellLoader?: any;
  isLoading?: boolean;
  cellUpdatingId?: boolean;
  gap?: number;
  listLoaderSize?: number;
  orientation?: 'column' | 'row';
  inverted?: boolean;
}
