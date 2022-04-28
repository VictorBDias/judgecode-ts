import React from 'react';
import { useNavigate } from 'react-router-dom';

// CUSTOM IMPORTS
import { Typography, Card, Button } from '../../shared/components/atoms';
import { Container } from './questionsBank.styles';
import { ScrollableList, SearchBar } from '../../shared/components/molecules';
import { Icon } from '../../shared/components/atoms/Icon';

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

type MockType = {
  id: number;
  title: string;
  description: string;
};
const QuestionsBank = () => {
  const navigate = useNavigate();
  // STATES
  const [show, setShow] = React.useState(false);
  // FUNCTIONS
  const renderCell = (mock: any) => (
    <Card margin={8}>
      <Typography>{mock.title}</Typography>
      <Typography>{mock.description}</Typography>
    </Card>
  );

  return (
    <Container>
      <Typography variant="title" style={{ margin: '40px 0 8px 4px' }}>
        Banco de questões
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <SearchBar placeholder="Busque uma questão" style={{ maxWidth: 400 }} />
        <Button
          leftIcon={<Icon name="plus" variant="white" />}
          onClick={() => navigate('/question/create')}
          size="md"
          style={{ marginLeft: 24 }}
        >
          Criar questão
        </Button>
      </div>

      <ScrollableList
        style={{ marginLeft: -4, marginBottom: 40, marginTop: 16 }}
        data={mockup}
        renderCell={renderCell}
        size={800}
      />
    </Container>
  );
};
export { QuestionsBank };
