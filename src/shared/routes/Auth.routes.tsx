import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GeneratedForm } from 'layers/public/GeneratedForm/GeneratedForm';
import { SignIn } from 'layers/auth/pages/SignIn/SignIn';
import { SignUp } from 'layers/auth/pages/SignUp/SignUp';

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signIn" element={<SignIn />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/answer-form/:formId" element={<GeneratedForm />} />
  </Routes>
);

export { AuthRoutes };
