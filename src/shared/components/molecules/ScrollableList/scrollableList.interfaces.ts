export interface ScrollableListProps {
    data: Array<object>;
    renderCell: (item : object, index : number) => {};
    size?: number;
}
