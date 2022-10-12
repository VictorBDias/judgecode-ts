import React from 'react';
import { useForm } from 'react-hook-form';
import { FormInput, Line, PageCard, Typography } from 'shared/components/atoms';
import { FooterButtons, LinesDraggableList } from 'shared/components/molecules';
import { CodeEditor } from 'shared/components/organisms';

const mockOrderData = [
  { id: 1, content: 'var length = items.length;' },
  { id: 2, content: 'for (var i = 0; i < length; i++)' },
  { id: 3, content: 'for (var j = 0; j < (length - i - 1); j++)' },
  { id: 4, content: 'if(items[j] > items[j+1]) var tmp = items[j]' },
  { id: 5, content: '  items[j] = items[j+1]; items[j+1] = tmp' },
];
const mockCategoryData = {
  id: '33b5bb58-ebaf-4026-a90d-58139dbe86ca',
  name: 'Editor de Código',
  description: 'Leia atentamente todas as questões e boa sorte',
  problems: [
    {
      id: '0b3f0a60-086b-4db9-90a8-9f753feae07e',
      title: 'Code editor faça um bubblesort ae na humilda',
      body: 'function bubbleSort(items) {\n    var length = items.length;  \n    for (var i = 0; i &lt; length; i++) { \n          for (var j = 0; j &lt; (length - i - 1); j++) { \n                   if(items[j] &gt; items[j+1]) {\n                           var tmp = items[j]; \n                items[j] = items[j+1]; \n                items[j+1] = tmp; \n            }\n        }        \n    }\n}\n\nvar arr = [5, 4, 3, 2, 1]; \nbubbleSort(arr);',
      language: 'javascript',
      type: 'codeEditor',
      owner_id: 'c54058e0-88d6-43a2-9890-9c38afb75b9c',
      category_id: '33b5bb58-ebaf-4026-a90d-58139dbe86ca',
      category: {
        id: '33b5bb58-ebaf-4026-a90d-58139dbe86ca',
        name: 'Editor de Código',
        description: '',
      },
      owner: {
        id: 'c54058e0-88d6-43a2-9890-9c38afb75b9c',
        first_name: 'Root',
        last_name: 'User',
        username: 'root',
        email: 'root@judgecode.com',
        remember_me_token: null,
        is_online: false,
        roles: [
          {
            id: '881c0eeb-f49c-4896-ad8f-e10464a96da6',
            slug: 'Root',
            description: 'a root user system',
            deletable: false,
            is_active: true,
          },
          {
            id: '49e7ea7a-30b7-46a7-88f8-d2753fddef07',
            slug: 'User',
            description: 'a common user system',
            deletable: false,
            is_active: true,
          },
        ],
        full_name: 'Root User',
      },
    },
  ],
};

export const GeneratedForm = () => {
  const { handleSubmit, register } = useForm<any>();
  //* FUNCTIONS
  const onSubmit = handleSubmit(async (data: any) => {
    console.log(data);
  });

  const handleRenderQuestions = (questions: any) =>
    questions.map((question: any, index: number) => {
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
          return null;
      }
    });
  return (
    <PageCard>
      <Typography variant="title">{mockCategoryData.name}</Typography>
      <Typography variant="subTitle">{mockCategoryData.description}</Typography>
      <Line style={{ margin: 24, marginLeft: -8 }} />
      <form id="category-form" onSubmit={handleSubmit(onSubmit)}>
        {handleRenderQuestions(mockCategoryData.problems)}
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
