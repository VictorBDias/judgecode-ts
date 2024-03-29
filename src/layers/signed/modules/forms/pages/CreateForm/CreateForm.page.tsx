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
import {
  handleFormatFormQuestions,
  handleFormatPutQuestions,
} from '../../handlers/handleFormatFormQuestions';

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
  const { createForm, updateForm, changeStatus, status } = useForms();
  const repository = useQuestions();
  const { formId } = useParams();

  const [initialData, setInitialData] = useState<IForm | null>(null);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    changeStatus('pending');

    if (formId) {
      showFormsApi({ id: formId }).then((response) => {
        setInitialData(response.data);
        changeStatus('success');
      });
    } else {
      changeStatus('success');
    }
  }, []);

  const onSubmit = ({ name, description }: any) => {
    try {
      if (!formId) {
        createForm({
          name,
          description,
          problems: handleFormatFormQuestions(repository.questions),
        });
      } else {
        updateForm({
          id: formId,
          data: {
            id: formId,
            name,
            description,
            problems: handleFormatPutQuestions({
              questions: repository.questions,
              categoryId: formId,
            }),
          },
        });
      }

      navigate('/forms');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Tabs tabs={tabs} variant="line">
        <form id="form-form" onSubmit={handleSubmit(onSubmit)}>
          <GeneralTab
            activeControls={{ isActive, setIsActive }}
            register={register}
            initialData={initialData}
          />
        </form>

        <CreateQuestionsProvider>
          <QuestionsTab
            repository={repository}
            initialData={initialData?.problems}
          />
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
