export interface ScrollableListProps {
  data: Array<object>;
  renderCell: (item: any, index: number) => {};
  size?: number;
  [x: string]: any;
}
