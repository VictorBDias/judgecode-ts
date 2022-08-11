import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GeneratedForm } from 'modules/public/GeneratedForm/GeneratedForm';
import { SignIn } from 'modules/auth/pages/SignIn/SignIn';
import { SignUp } from 'modules/auth/pages/SignUp/SignUp';

const AuthRoutes = () => (
  <Routes>
    <Route path="/signIn" element={<SignIn />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/answer-form/:formId" element={<GeneratedForm />} />
  </Routes>
);

export { AuthRoutes };
