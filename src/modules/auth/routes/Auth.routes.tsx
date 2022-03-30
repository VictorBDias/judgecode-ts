import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn/SignIn';

const AuthRoutes = () => (
  <Routes>
    <Route path="/signIn" element={<SignIn />} />
    <Route path="/signUp" element={<h1>mid af signup</h1>} />
  </Routes>
);

export { AuthRoutes };
