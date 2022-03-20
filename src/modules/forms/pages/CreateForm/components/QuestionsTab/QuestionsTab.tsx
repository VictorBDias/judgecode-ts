import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoDatabase, GoPlus } from 'react-icons/go';

// CUSTOM IMPORTS
import {
  Typography,
  Card,
  Button,
} from '../../../../../../shared/components/atoms';
import { Container } from './questionsTab.styles';
import {
  ScrollableList,
  Modal,
  SearchBar,
} from '../../../../../../shared/components/molecules';

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
    <>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            // variant="outline"
            leftIcon={<GoPlus />}
            onClick={() => navigate('/question/create')}
            size="sm"
            style={{ marginBottom: 8 }}
          >
            Criar questão
          </Button>
          <Button
            variant="outline"
            leftIcon={<GoDatabase />}
            onClick={() => setShow(true)}
            // onClick={() => navigate('/question/create')}
            size="sm"
            style={{ marginBottom: 8, marginLeft: 16 }}
          >
            Utilizar banco
          </Button>
        </div>

        <ScrollableList
          style={{ marginLeft: -4, marginBottom: 40 }}
          data={mockup}
          renderCell={renderCell}
          size={800}
        />
      </Container>
      <Modal title="Selecione para adicionar" stateControl={{ show, setShow }}>
        <SearchBar />
      </Modal>
    </>
  );
};
export { QuestionsTab };
