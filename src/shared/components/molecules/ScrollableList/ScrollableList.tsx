import React from 'react';

import { Icon } from 'shared/components/atoms/Icon';
import { Button } from 'shared/components/atoms/Button';
import { Typography } from 'shared/components/atoms/Typography';
import { Container, ButtonContainer } from './scrollableList.styles';
import { ScrollableListProps } from './scrollableList.interfaces';

export const ScrollableList = ({
  data,
  currentPage,
  lastPage,
  renderCell,
  handlePaginate,
  ...rest
}: ScrollableListProps) => {
  const handleRenderCell = (item: object, index: number) => (
    <div key={`${item}-${index}`}>{renderCell(item, index)}</div>
  );

  return (
    <div {...rest}>
      <Container>
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
                justifyContent: 'center',
                marginTop: 24,
              }}
            >
              <Icon name="error" />
              <Typography>Lista vazia</Typography>
            </div>
          ))}
      </Container>
      <ButtonContainer>
        {/* {currentPage > 1 && (
          <Button
            variant="outline"
            onClick={() => handlePaginate(-1)}
            size="md"
            style={{ marginRight: 32 }}
          >
            Anterior
          </Button>
        )} */}
        {currentPage < lastPage && (
          <Button variant="outline" onClick={() => handlePaginate(1)} size="md">
            Próxima
          </Button>
        )}
      </ButtonContainer>
    </div>
  );
};
