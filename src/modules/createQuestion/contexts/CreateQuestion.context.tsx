import React, { createContext, ReactNode } from 'react';

interface createQuestionProviderProps {
  children: ReactNode;
}

interface CreateQuestionContextProps {}

const CreateQuestionContext = createContext({} as CreateQuestionContextProps);

const CreateQuestionsProvider = ({ children }: createQuestionProviderProps) => {
  return (
    <CreateQuestionContext.Provider
      value={
        {
          // STATES
          // FUNCTIONS
        }
      }
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
