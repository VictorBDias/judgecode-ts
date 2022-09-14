import { useQuestions } from 'layers/signed/modules/questionBank/hooks/useQuestionBank';
import React, { useCallback, useEffect } from 'react';
import { Button, Card, Icon, Typography } from 'shared/components/atoms';
import { CheckBox } from 'shared/components/atoms/Checkbox';
import { Modal, ScrollableList, SearchBar } from 'shared/components/molecules';
import { IQuestion } from 'shared/interfaces/questions.interfaces';

const QuestionBankModal = ({ show, onClose, createSideEffect }: any) => {
  const { listQuestions, questions, page, lastPage } = useQuestions();
  const renderCell = (question: IQuestion) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button onClick={() => createSideEffect(question)} size="sm">
        <Icon name="plus" variant="white" />
      </Button>
      <Card width={400} height={100} margin={8}>
        <Typography maxLines={1}>{question.title}</Typography>
        <Typography maxLines={2}>{question.body}</Typography>
      </Card>
    </div>
  );

  //* FUNCTIONS
  const listQuestionsFunc = useCallback((page = 1) => {
    listQuestions({ page: 1 });
  }, []);

  useEffect(() => {
    listQuestionsFunc();
  }, []);

  const handlePaginate = useCallback((value) => {
    listQuestions({ page: page + value });
  }, []);

  const handleSearch = useCallback((value) => {
    listQuestions({ page: 1, search: value });
  }, []);

  return (
    <Modal
      size="lg"
      title="Selecione para adicionar"
      show={show}
      onClose={onClose}
    >
      <>
        <SearchBar
          placeholder="Busque uma questão"
          style={{ maxWidth: 400 }}
          onChange={(value: string) => handleSearch(value)}
        />
        <ScrollableList
          style={{ marginTop: 16 }}
          data={questions}
          currentPage={page}
          lastPage={lastPage}
          handlePaginate={handlePaginate}
          renderCell={renderCell}
          size={600}
        />
      </>
    </Modal>
  );
};
export { QuestionBankModal };
