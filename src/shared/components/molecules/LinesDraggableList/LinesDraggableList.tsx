import React from 'react';
import PropTypes from 'prop-types';

//* CUSTOM IMPORTS
import { CodeEditor } from '../../organisms/CodeEditor';
import { Icon, IconedButton, Typography } from '../../atoms';
import { DraggableList } from '../DraggableList';

import {
  Container,
  CellContainer,
  AbsoluteContainer,
} from './linesDraggableList.styles';

export const LinesDraggableList = ({
  title,
  data,
  onAdd,
  onDragFinish,
  onDelete,
}: any) => {
  //* FUNCTIONS
  const renderCell = (line: any) => {
    const { id, name } = line;

    return (
      <CellContainer>
        <Icon name="drag" className="drag-icon" />

        <CodeEditor
          mode="javascript"
          value="Teste"
          onChange={(value) => console.log(value)}
        />

        <AbsoluteContainer>
          <Icon onClick={() => onDelete(line)}>
            <Icon name="close" />
          </Icon>
        </AbsoluteContainer>
      </CellContainer>
    );
  };

  return (
    <Container>
      {title && (
        <Typography
          className="normal small bold uppercase"
          style={{ marginBottom: 10 }}
        >
          {title}
        </Typography>
      )}

      <DraggableList
        data={data}
        renderCell={renderCell}
        onDragFinish={onDragFinish}
      />

      <IconedButton
        style={{ marginTop: 16 }}
        onClick={onAdd}
        label="Adicionar"
        icon={<Icon name="plus" />}
      />
    </Container>
  );
};
