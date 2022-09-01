import React from 'react';
import { Card, Typography } from 'shared/components/atoms';
import { CheckBox } from 'shared/components/atoms/Checkbox';
import { Modal, ScrollableList, SearchBar } from 'shared/components/molecules';

const QuestionBankModal = ({ show, onClose }: any) => {
  const mockup = [
    {
      id: 1,
      title: 'Question 1',
      description: 'Description',
    },
    {
      id: 2,
      title: 'Question 2',
      description: 'Eng. Software 2021 Description',
    },
  ];
  const renderCell = (mock: any) => (
    <div style={{ display: 'flex', marginLeft: 8 }}>
      <CheckBox />
      <Card width={400} height={80} margin={8}>
        <Typography>{mock.title}</Typography>
        <Typography>{mock.description}</Typography>
      </Card>
    </div>
  );

  return (
    <Modal
      size="lg"
      title="Selecione para adicionar"
      show={show}
      onClose={onClose}
    >
      <>
        <SearchBar placeholder="Busque uma questão" />
        <ScrollableList
          style={{ marginTop: 16 }}
          data={mockup}
          renderCell={renderCell}
          size={600}
        />
      </>
    </Modal>
  );
};
export { QuestionBankModal };
