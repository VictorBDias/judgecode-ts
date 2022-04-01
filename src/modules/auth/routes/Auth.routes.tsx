import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';

const AuthRoutes = () => (
  <Routes>
    <Route path="/signIn" element={<SignIn />} />
    <Route path="/signUp" element={<SignUp />} />
  </Routes>
);

export { AuthRoutes };
