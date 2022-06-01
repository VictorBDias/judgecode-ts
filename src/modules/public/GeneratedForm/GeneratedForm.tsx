import React from 'react';
import { FormInput, Line, PageCard, Typography } from 'shared/components/atoms';
import { FooterButtons, LinesDraggableList } from 'shared/components/molecules';
import { CodeEditor } from 'shared/components/organisms';

const mockQuestions = [
  { id: 1, type: 'codeEditor' },
  { id: 1, type: 'orderCode' },
];

const mockCodeEditor = `# Qual o resultado da seguinte função recursiva em Python?

def fatorial(n: int) -> int:
    if n == 1 or n == 0:
        return 1
    return n * fatorial(n - 1)


if __name__ == "__main__":
    fat5 = fatorial(5)
    print(fat5)"
`;
const mockOrderData = [
  { id: 1, content: 'var length = items.length;' },
  { id: 2, content: 'for (var i = 0; i < length; i++)' },
  { id: 3, content: 'for (var j = 0; j < (length - i - 1); j++)' },
  { id: 4, content: 'if(items[j] > items[j+1]) var tmp = items[j]' },
  { id: 5, content: '  items[j] = items[j+1]; items[j+1] = tmp' },
];
export const handleRenderQuestions = (questions: any) =>
  questions.map((question: any) => {
    const { type } = question;
    switch (type) {
      case 'codeEditor':
        return (
          <>
            <CodeEditor
              showLanguageOptions={false}
              mode="python"
              readOnly
              value={mockCodeEditor}
              initialData={question}
            />
            <FormInput
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
            <LinesDraggableList
              data={mockOrderData}
              readOnly
              title="Ordene as linhas a fim de realizar uma implementação de classificação em bolha em JavaScript"
              initialData={question}
            />
            <Line style={{ margin: 24, marginLeft: -8 }} />
          </>
        );

      default:
        return null;
    }
  });

export const GeneratedForm = () => {
  return (
    <PageCard>
      <Typography variant="title">Formulário teste</Typography>
      <Typography variant="subTitle">
        Leia atentamente as questões antes de responder
      </Typography>
      {handleRenderQuestions(mockQuestions)}
      <FooterButtons
        disableCancelButton
        onCancel={() => console.log('cancel')}
      />
    </PageCard>
  );
};
