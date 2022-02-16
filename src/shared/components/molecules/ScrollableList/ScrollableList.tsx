import React from 'react';

// CUSTOM IMPORTS
import SimpleBar from 'simplebar-react';
import { Container, List } from './scrollableList.styles';
import { ScrollableListProps } from './scrollableList.interfaces';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'simplebar/dist/simplebar.min.css';

/** List displays words and characters at various sizes. */
function ScrollableList({
  data, renderCell, ...rest
} : ScrollableListProps) {
  const handleRenderCell = (item: object, index: number) => <div key={`${item}-${index}`}>{renderCell(item, index)}</div>;

  return (
    <Container class="simplebar-container">
      <List {...rest}>
        {data
          && (data.length > 0
            ? data.map(
              (item, index) => item !== null && handleRenderCell(item, index),
            )
            : <h1>empty</h1>)}
      </List>
    </Container>
  );
}

export { ScrollableList };
// scrollbarMinSize;
