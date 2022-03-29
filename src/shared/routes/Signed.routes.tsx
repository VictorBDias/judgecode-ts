import React from 'react';
import { Routes, Route } from 'react-router-dom';

// CUSTOM IMPORTS
// import { CreateForm } from '../../modules/forms/pages/CreateForm/CreateForm.page';
import { FormList, CreateForm } from '../../modules/forms/pages';
import { QuestionsBank } from '../../modules/questionBank/QuestionsBank';
import { SignedProvider } from '../contexts';

// ELEMENTS

export const SignedRoutes: React.FC = () => (
  // const { user } = useAuth();

  <SignedProvider>
    <Routes>
      <Route path="/" element={<FormList />} />
      <Route path="/forms" element={<FormList />} />
      <Route path="/forms/create" element={<CreateForm />} />
      <Route path="/question-bank" element={<QuestionsBank />} />
    </Routes>
  </SignedProvider>
);
