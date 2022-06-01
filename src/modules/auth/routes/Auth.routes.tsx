import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GeneratedForm } from 'modules/public/GeneratedForm/GeneratedForm';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';

const AuthRoutes = () => (
  <Routes>
    <Route path="/signIn" element={<SignIn />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/answer-form/:formId" element={<GeneratedForm />} />
  </Routes>
);

export { AuthRoutes };
