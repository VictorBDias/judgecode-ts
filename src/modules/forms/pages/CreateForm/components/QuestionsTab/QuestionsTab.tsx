import React from 'react';
import { useNavigate } from 'react-router-dom';

// CUSTOM IMPORTS
import {
  Typography,
  Card,
  Button,
} from '../../../../../../shared/components/atoms';
import {
  Container,
  AddIcon,
  BookmarkIcon,
  IconContainer,
} from './questionsTab.styles';
import { ScrollableList } from '../../../../../../shared/components/molecules';

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
const QuestionsTab = () => {
  // STATES
  const navigate = useNavigate();

  // FUNCTIONS
  const renderCell = (mock: any) => (
    <Card margin={8}>
      <Typography>{mock.title}</Typography>
      <Typography>{mock.description}</Typography>
    </Card>
  );

  return (
    <Container>
      <Button
        variant="outline"
        color="lightSecondary"
        onClick={() => navigate('/question/create')}
        size="sm"
        style={{ marginBottom: 8, marginRight: 8 }}
      >
        Criar questão
      </Button>
      <Button
        variant="outline"
        color="lightSecondary"
        onClick={() => navigate('/question/create')}
        size="sm"
        style={{ marginBottom: 8 }}
      >
        Utilizar banco
      </Button>

      <ScrollableList
        style={{ marginLeft: -4, marginBottom: 40 }}
        data={mockup}
        renderCell={renderCell}
        size={800}
      />
    </Container>
  );
};
export { QuestionsTab };
