import { useQuestions } from 'layers/signed/modules/questionBank/hooks/useQuestionBank';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { Tabs, FooterButtons } from 'shared/components/molecules';
import { CreateQuestionsProvider } from '../../../createQuestion/contexts/CreateQuestion.context';
import { useForms } from '../../hooks/useForms';
import { GeneralTab } from './components/GeneralTab/GeneralTab';
import { QuestionsTab } from './components/QuestionsTab/QuestionsTab';
import { showFormsApi } from '../../apis/forms.apis';
import { IForm } from '../../interfaces/forms.interfaces';
import { handleFormatFormQuestions } from '../../handlers/handleFormatFormQuestions';

type FieldValues = {
  name: string;
};

const tabs = ['Geral', 'Questões'];

const CreateForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FieldValues>();
  const navigate = useNavigate();
  const { createForm } = useForms();
  const repository = useQuestions();
  const { formId } = useParams();

  const [initialData, setInitialData] = useState<IForm | null>(null);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (formId) {
      showFormsApi({ id: formId }).then((response) =>
        setInitialData(response.data),
      );
    }
  }, []);

  const onSubmit = ({ name, description }: any) => {
    createForm({
      name,
      description,
      problems: handleFormatFormQuestions(repository.questions),
    });
    navigate('/forms');
  };

  return (
    <form id="form-form" onSubmit={handleSubmit(onSubmit)}>
      <Tabs tabs={tabs} variant="line">
        <GeneralTab
          activeControls={{ isActive, setIsActive }}
          register={register}
          initialData={initialData}
        />
        <CreateQuestionsProvider>
          <QuestionsTab repository={repository} />
        </CreateQuestionsProvider>
      </Tabs>
      <FooterButtons
        formId="form-form"
        type="submit"
        onCancel={() => navigate('/forms')}
      />
    </form>
  );
};

export { CreateForm };
