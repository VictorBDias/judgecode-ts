import React from 'react';
import { useForm } from 'react-hook-form';

//* CUSTOM IMPORTS
import { Tabs, FooterButtons } from '../../../../shared/components/molecules';
import { GeneralTab } from './components/GeneralTab/GeneralTab';
import { QuestionsTab } from './components/QuestionsTab/QuestionsTab';

// import { Teste } from './interfaces/formList.interface';\type FormInputs = {
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

  // FUNCTIONS
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Tabs tabs={tabs} variant="line">
        <GeneralTab />
        <QuestionsTab />
      </Tabs>
      <FooterButtons
        formId="form-form"
        type="submit"
        onCancel={() => console.log('cancel')}
      />
    </>
  );
};

export { CreateForm };
