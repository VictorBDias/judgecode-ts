import React from 'react';
import { useNavigate } from 'react-router-dom';

// CUSTOM IMPORTS
import {
  Typography,
  Card,
  Button,
} from '../../../../../../shared/components/atoms';
import { Container } from './questionsTab.styles';
import { ScrollableList } from '../../../../../../shared/components/molecules';
import { Icon } from '../../../../../../shared/components/atoms/Icon';
import { QuestionBankModal } from './QuestionBankModal/QuestionBankModal';
import { CreateQuestionModal } from '../../../../components/CreateQuestionModal/CreateQuestionModal';

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
  const [showBankModal, setShowBankModal] = React.useState(false);
  const [showQuestionModal, setShowQuestionModal] = React.useState(false);
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
            leftIcon={<Icon name="plus" variant="white" />}
            onClick={() => setShowQuestionModal(true)}
            size="sm"
            style={{ marginBottom: 8 }}
          >
            Criar questão
          </Button>
          <Button
            variant="outline"
            leftIcon={<Icon name="database" variant="secondary" />}
            onClick={() => setShowBankModal(true)}
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
      <QuestionBankModal
        show={showBankModal}
        onClose={() => setShowBankModal(false)}
      />
      <CreateQuestionModal
        show={showQuestionModal}
        onClose={() => setShowQuestionModal(false)}
      />
    </>
  );
};
export { QuestionsTab };
