import { useQuestions } from 'layers/signed/modules/questionBank/hooks/useQuestionBank';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Tabs, FooterButtons } from 'shared/components/molecules';
import { CreateQuestionsProvider } from '../../../createQuestion/contexts/CreateQuestion.context';
import { GeneralTab } from './components/GeneralTab/GeneralTab';
import { QuestionsTab } from './components/QuestionsTab/QuestionsTab';

type FieldValues = {
  name: string;
};

const tabs = ['Geral', 'Questões', 'Visualizar'];

const CreateForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FieldValues>();
  const navigate = useNavigate();
  const repository = useQuestions();

  const [isActive, setIsActive] = useState(false);

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Tabs tabs={tabs} variant="line">
        <GeneralTab activeControls={{ isActive, setIsActive }} />
        <CreateQuestionsProvider>
          <QuestionsTab repository={repository} />
        </CreateQuestionsProvider>
      </Tabs>
      <FooterButtons
        formId="form-form"
        type="submit"
        onCancel={() => navigate('/forms')}
      />
    </>
  );
};

export { CreateForm };
