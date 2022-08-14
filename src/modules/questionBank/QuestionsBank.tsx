import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, Button } from '../../shared/components/atoms';
import { Container } from './questionsBank.styles';
import { ScrollableList, SearchBar } from '../../shared/components/molecules';
import { Icon } from '../../shared/components/atoms/Icon';
import { CreateQuestionModal } from '../forms/components/CreateQuestionModal/CreateQuestionModal';
import { CreateQuestionsProvider } from '../createQuestion/contexts/CreateQuestion.context';
import { QuestionCard } from '../forms/pages/CreateForm/components/QuestionsTab/QuestionCard/QuestionCard';
import FilterByTagModal from './components/FilterByTagModal/FilterByTagModal';
import { useQuestions } from './hooks/useQuestionBank';

const QuestionsBankContent = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showTagModal, setShowTagModal] = useState<boolean>(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const { listQuestions, page, questions } = useQuestions();

  //* FUNCTIONS
  const listQuestionsFunc = useCallback((page = 1) => {
    listQuestions({ page: 1 });
  }, []);

  useEffect(() => {
    listQuestionsFunc();
  }, []);

  const renderCell = (mock: any) => <QuestionCard data={mock} />;
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
          onClick={() => setShowQuestionModal(true)}
          size="md"
          style={{ marginLeft: 24 }}
        >
          Criar questão
        </Button>
        <Button
          variant="outline"
          leftIcon={<Icon name="tags" variant="secondary" />}
          onClick={() => setShowTagModal(true)}
          size="md"
          style={{ marginLeft: 68 }}
        >
          Filtrar por Tags
        </Button>
      </div>

      <ScrollableList
        style={{ marginLeft: -4, marginBottom: 40, marginTop: 16 }}
        data={questions}
        renderCell={renderCell}
        size={800}
      />

      <CreateQuestionModal
        show={showQuestionModal}
        onClose={() => setShowQuestionModal(false)}
      />

      <FilterByTagModal show={false} />
    </Container>
  );
};

const QuestionsBank = () => {
  return (
    <CreateQuestionsProvider>
      <QuestionsBankContent />
    </CreateQuestionsProvider>
  );
};

export { QuestionsBank };
