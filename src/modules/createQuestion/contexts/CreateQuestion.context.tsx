import React, { createContext, ReactNode, useState } from 'react';

interface createQuestionProviderProps {
  children: ReactNode;
}

type CreateQuestionContextProps = any;

const CreateQuestionContext = createContext({} as CreateQuestionContextProps);

const CreateQuestionsProvider = ({ children }: createQuestionProviderProps) => {
  const [codeEditorContent, setCodeEditorContent] = useState('');
  return (
    <CreateQuestionContext.Provider
      value={{
        // STATES
        codeEditorContent,
        setCodeEditorContent,
        // FUNCTIONS
      }}
    >
      {children}
    </CreateQuestionContext.Provider>
  );
};

function useCreateQuestion() {
  const context = React.useContext(CreateQuestionContext);

  if (!context) {
    throw new Error(
      'useCreateQuestion must be used within CreateQuestionsProvider',
    );
  }

  return context;
}

export { CreateQuestionsProvider, useCreateQuestion };
