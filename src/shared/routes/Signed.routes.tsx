import React from 'react';
import { Routes, Route } from 'react-router-dom';

// CUSTOM IMPORTS
// import { CreateForm } from '../../modules/forms/pages/CreateForm/CreateForm.page';
import { SignedProvider } from 'layers/auth/contexts';
import { FormList, CreateForm } from '../../layers/signed/modules/forms/pages';
import { QuestionsBank } from '../../layers/signed/modules/questionBank/pages/QuestionsBank/QuestionsBank.page';
import { CreateQuestion } from '../../layers/signed/modules/createQuestion/CreateQuestion';
import { CreateQuestionsProvider } from '../../layers/signed/modules/createQuestion/contexts/CreateQuestion.context';

// ELEMENTS

export const SignedRoutes: React.FC = () => (
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
