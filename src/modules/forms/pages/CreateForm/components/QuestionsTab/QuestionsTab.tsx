import React from 'react';
import { useNavigate } from 'react-router-dom';

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
import { Icon } from '../../../../../../shared/components/atoms/Icon';
import { QuestionBankModal } from './QuestionBankModal/QuestionBankModal';

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
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: 32,
          }}
        >
          <Button
            // variant="outline"
            leftIcon={<Icon iconName="plus" variant="white" />}
            onClick={() => navigate('/question/create')}
            size="sm"
            style={{ marginBottom: 8 }}
          >
            Criar questão
          </Button>
          <Button
            variant="outline"
            leftIcon={<Icon iconName="database" variant="secondary" />}
            onClick={() => setShow(true)}
            // onClick={() => navigate('/question/create')}
            size="sm"
            style={{ marginBottom: 8, marginLeft: 24 }}
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
      <QuestionBankModal stateControl={{ show, setShow }} />
    </>
  );
};
export { QuestionsTab };
