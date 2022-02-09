import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AuthRoutes = () => (
  <Routes>
    <Route path="/signIn" element={<h1>mid af signin</h1>} />
    <Route path="/signUp" element={<h1>mid af signup</h1>} />
  </Routes>
);

export { AuthRoutes };
