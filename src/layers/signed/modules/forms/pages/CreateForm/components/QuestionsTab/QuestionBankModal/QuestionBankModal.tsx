import { useQuestions } from 'layers/signed/modules/questionBank/hooks/useQuestionBank';
import React, { useCallback, useEffect } from 'react';
import { Card, Typography } from 'shared/components/atoms';
import { CheckBox } from 'shared/components/atoms/Checkbox';
import { Modal, ScrollableList, SearchBar } from 'shared/components/molecules';
import { IQuestion } from 'shared/interfaces/questions.interfaces';

const QuestionBankModal = ({ show, onClose }: any) => {
  const { listQuestions, questions } = useQuestions();
  const renderCell = (question: IQuestion) => (
    <div style={{ display: 'flex', marginLeft: 8 }}>
      <CheckBox />
      <Card width={400} height={80} margin={8}>
        <Typography>{question.title}</Typography>
        <Typography>{question.body}</Typography>
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
          data={questions}
          renderCell={renderCell}
          size={600}
        />
      </>
    </Modal>
  );
};
export { QuestionBankModal };
