import React from 'react';

//* CUSTOM IMPORTS
import { CodeEditor } from '../../organisms/CodeEditor';
import { Icon, IconedButton, Typography } from '../../atoms';
import { DraggableList } from '../DraggableList';

import { CellContainer, Container } from './linesDraggableList.styles';
import { linesDraggableListProps } from './linesDraggableList.interfaces';

export const LinesDraggableList = ({
  title,
  data,
  onAdd,
  onDragFinish,
  onDelete,
  initialData,
  readOnly = false,
  ...rest
}: linesDraggableListProps) => {
  //* FUNCTIONS
  const renderCell = (line: any) => {
    const { id, content } = line;

    return (
      <CellContainer>
        <Icon name="drag" className="drag-icon" />

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <CodeEditor
            {...rest}
            readOnly={readOnly}
            mode="javascript"
            value={content}
            onChange={(value) => console.log(value)}
            showLanguageOptions={false}
            minLines={3}
            maxLines={3}
          />

          {!readOnly && (
            <IconedButton
              onClick={() => onDelete(line.id)}
              icon={<Icon name="close" />}
            />
          )}
        </div>
      </CellContainer>
    );
  };

  return (
    <Container>
      {title && <Typography variant="regular">{title}</Typography>}

      <DraggableList
        data={data}
        renderCell={renderCell}
        onDragFinish={onDragFinish}
      />

      {!readOnly && (
        <IconedButton
          style={{ marginTop: 24 }}
          onClick={onAdd}
          label="Adicionar"
          icon={<Icon name="plus" />}
        />
      )}
    </Container>
  );
};
