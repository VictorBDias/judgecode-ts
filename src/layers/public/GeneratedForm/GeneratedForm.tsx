import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { FormInput, Line, PageCard, Typography } from 'shared/components/atoms';
import { FooterButtons, LinesDraggableList } from 'shared/components/molecules';
import { CodeEditor } from 'shared/components/organisms';
import { guestShowFormApi } from './apis/generatedForm.apis';

const mockOrderData = [
  { id: 1, content: 'var length = items.length;' },
  { id: 2, content: 'for (var i = 0; i < length; i++)' },
  { id: 3, content: 'for (var j = 0; j < (length - i - 1); j++)' },
  { id: 4, content: 'if(items[j] > items[j+1]) var tmp = items[j]' },
  { id: 5, content: '  items[j] = items[j+1]; items[j+1] = tmp' },
];

export const GeneratedForm = () => {
  const { handleSubmit, register } = useForm<any>();
  const { formId } = useParams<{ formId: string }>();
  const [formData, setFormData] = React.useState<any>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  //* FUNCTIONS
  useEffect(() => {
    setIsLoaded(false);
    guestShowFormApi(formId!).then((res) => {
      setFormData(res.data);
      setIsLoaded(true);
    });
  }, []);

  const onSubmit = handleSubmit(async (data: any) => {
    console.log(data);
  });

  const handleRenderQuestions = (questions: any) =>
    questions.map((question: any, index: number) => {
      console.log(question);
      const { id, title, body, language, type } = question;
      switch (type) {
        case 'codeEditor':
          return (
            <>
              <Typography variant="subTitle" style={{ marginBottom: -16 }}>
                {`${index + 1}:   ${title}`}
              </Typography>
              <CodeEditor
                showLanguageOptions={false}
                mode={language}
                readOnly
                value={body}
              />
              <FormInput
                key={id}
                {...register(`${id}`, { required: true })}
                variant="filled"
                style={{ marginTop: 16, width: '90%' }}
                placeholder="Insira sua resposta"
              />
              <Line style={{ margin: 24, marginLeft: -8 }} />
            </>
          );

        case 'orderCode':
          return (
            <>
              <Typography variant="subTitle" style={{ marginBottom: -16 }}>
                {`${index + 1}:   ${title}`}
              </Typography>
              <LinesDraggableList
                data={mockOrderData}
                readOnly
                title={title}
                initialData={question}
              />
              <Line style={{ margin: 24, marginLeft: -8 }} />
            </>
          );

        default:
          return (
            <>
              <Typography variant="subTitle" style={{ marginBottom: -16 }}>
                {`${index + 1}:   ${title}`}
              </Typography>
              <CodeEditor
                showLanguageOptions={false}
                mode={language}
                readOnly
                value={body}
              />
              <FormInput
                key={id}
                {...register(`${id}`, { required: true })}
                variant="filled"
                style={{ marginTop: 16, width: '90%' }}
                placeholder="Insira sua resposta"
              />
              <Line style={{ margin: 24, marginLeft: -8 }} />
            </>
          );
      }
    });

  if (!isLoaded) {
    return <Typography variant="subTitle">...</Typography>;
  }

  return (
    <PageCard>
      <Typography variant="title">{formData.name}</Typography>
      <Typography variant="subTitle">{formData.description}</Typography>
      <Line style={{ margin: 24, marginLeft: -8 }} />
      <form id="category-form" onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', gap: 16 }}>
          <FormInput
            style={{ marginBottom: 16, maxWidth: 320 }}
            {...register('name', { required: true })}
            placeholder="Nome completo"
            label="Nome completo"
          />
          <FormInput
            style={{ marginBottom: 16, maxWidth: 320 }}
            {...register('ra', { required: true })}
            placeholder="Registro acadêmico"
            label="RA"
          />
        </div>
        {handleRenderQuestions(formData.problems)}
        <FooterButtons
          formId="category-form"
          type="submit"
          disableCancelButton
          confirmButtonName="Enviar"
          onCancel={() => {}}
        />
      </form>
    </PageCard>
  );
};
