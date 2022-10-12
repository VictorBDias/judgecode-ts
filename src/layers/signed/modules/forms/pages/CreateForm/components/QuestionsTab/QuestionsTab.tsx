import React, { useEffect, useState } from 'react';

import { IQuestion } from 'shared/interfaces/questions.interfaces';
import { Button } from 'shared/components/atoms';
import { ScrollableList } from 'shared/components/molecules';
import { Icon } from 'shared/components/atoms/Icon';
import { handleFormatQuestions } from 'layers/signed/modules/questionBank/pages/QuestionsBank/utils/formattQuestions';
import { Container } from './questionsTab.styles';
import { QuestionBankModal } from './QuestionBankModal/QuestionBankModal';
import { CreateQuestionModal } from '../../../../components/CreateQuestionModal/CreateQuestionModal';
import { QuestionCard } from './QuestionCard/QuestionCard';

const QuestionsTab = ({ repository, initialData }: any) => {
  const {
    questions,
    deleteQuestion,
    updateQuestion,
    createQuestion,
    createSideEffect,
  } = repository;

  //* STATES
  const [showBankModal, setShowBankModal] = React.useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<IQuestion | null>(
    null,
  );
  //* FUNCTIONS
  useEffect(() => {
    if (initialData) {
      initialData.map((question: any) => createSideEffect(question));
    }
  }, [initialData]);

  const renderCell = (data: IQuestion) => {
    const { title, body, id, language } = data;
    return (
      <QuestionCard
        title={title}
        id={id!}
        tag={language}
        onEdit={() => {
          setSelectedQuestion(data);
          setShowQuestionModal(true);
        }}
        onDelete={() => deleteQuestion({ id })}
      />
    );
  };

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
          data={questions}
          renderCell={renderCell}
          size={800}
        />
      </Container>
      <QuestionBankModal
        show={showBankModal}
        createSideEffect={createSideEffect}
        onClose={() => setShowBankModal(false)}
      />
      <CreateQuestionModal
        onlySideEffect
        show={showQuestionModal}
        onClose={() => {
          setShowQuestionModal(false);
          setSelectedQuestion(null);
        }}
        initialData={selectedQuestion}
        createQuestion={createQuestion}
        updateQuestion={updateQuestion}
      />
    </>
  );
};
export { QuestionsTab };
