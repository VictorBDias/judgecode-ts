import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { InputLoader } from '../../atoms/Input/InputLoader/InputLoader';
import { DraggableListProps } from './draggableList.interfaces';

export const DraggableList = ({
  gap = 16,
  data,
  onDragFinish = () => {},
  renderCell = () => {},
  renderCellLoader = () => {},
  isDragDisabled = false,
  isLoading = false,
  listLoaderSize = 3,
  cellUpdatingId,
  orientation = 'column',
  inverted = false,
  ...rest
}: DraggableListProps) => {
  const cellLoader = () => <InputLoader />;
  //* FUNCTIONS
  const reorder = ({ newData, startIndex, endIndex }: any) => {
    const result = Array.from(newData);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const items = reorder({
      newData: data,
      startIndex: result.source.index,
      endIndex: result.destination.index,
    });

    if (
      items.some(
        (item: any, index: number) => item.id !== String(data[index].id),
      )
    ) {
      if (data.length > 1) onDragFinish(items);
    }
  };

  const getItemStyle = (isDragging: boolean, draggableStyle: any) =>
    draggableStyle;

  return (
    <DragDropContext onDragEnd={onDragEnd} {...rest}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              display: 'flex',
              gap,
              flexDirection: orientation,
            }}
          >
            {!inverted && cellLoader}

            {data.map((item: any, index: number) =>
              String(item.id) === String(1) ? (
                cellLoader
              ) : (
                <Draggable
                  isDragDisabled={isDragDisabled}
                  key={String(item.id)}
                  draggableId={String(item.id)}
                  index={index}
                >
                  {(innerProvider, snapshot) => (
                    <div
                      ref={innerProvider.innerRef}
                      {...innerProvider.draggableProps}
                      {...innerProvider.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        innerProvider.draggableProps.style,
                      )}
                    >
                      {renderCell(item, index)}
                    </div>
                  )}
                </Draggable>
              ),
            )}
            {inverted && cellLoader}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
