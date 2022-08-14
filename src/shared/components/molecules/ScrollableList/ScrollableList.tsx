import React from 'react';

// CUSTOM IMPORTS
import { Icon } from 'shared/components/atoms/Icon';
import { Typography } from 'shared/components/atoms/Typography';
import SimpleBar from 'simplebar-react';
import { Container, List } from './scrollableList.styles';
import { ScrollableListProps } from './scrollableList.interfaces';
import 'simplebar/dist/simplebar.min.css';

/** List displays words and characters at various sizes. */
function ScrollableList({ data, renderCell, ...rest }: ScrollableListProps) {
  const handleRenderCell = (item: object, index: number) => (
    <div key={`${item}-${index}`}>{renderCell(item, index)}</div>
  );

  return (
    <Container class="simplebar-container">
      <List {...rest}>
        {data &&
          (data.length > 0 ? (
            data.map(
              (item, index) => item !== null && handleRenderCell(item, index),
            )
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'cener',
                marginTop: 24,
              }}
            >
              <Icon name="error" />
              <Typography>Lista vazia</Typography>
            </div>
          ))}
      </List>
    </Container>
  );
}

export { ScrollableList };
