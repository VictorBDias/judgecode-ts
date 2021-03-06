import React from 'react';
import { Routes, Route } from 'react-router-dom';

// CUSTOM IMPORTS
// import { CreateForm } from '../../modules/forms/pages/CreateForm/CreateForm.page';
import { SignedProvider } from 'modules/auth/contexts';
import { FormList, CreateForm } from '../../modules/forms/pages';
import { QuestionsBank } from '../../modules/questionBank/QuestionsBank';
import { CreateQuestion } from '../../modules/createQuestion/CreateQuestion';
import { CreateQuestionsProvider } from '../../modules/createQuestion/contexts/CreateQuestion.context';

// ELEMENTS

export const SignedRoutes: React.FC = () => (
  // const { user } = useAuth();

  <SignedProvider>
    <Routes>
      <Route path="/" element={<FormList />} />
      <Route path="/forms" element={<FormList />} />
      <Route path="/forms/create" element={<CreateForm />} />
      <Route path="/question-bank" element={<QuestionsBank />} />
      <Route path="/question/create" element={<CreateQuestion />} />
    </Routes>
  </SignedProvider>
);
