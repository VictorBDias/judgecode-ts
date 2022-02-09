import React from 'react';
import { Routes, Route } from 'react-router-dom';

// CUSTOM IMPORTS
import { SignedProvider } from '../contexts';

export const SignedRoutes: React.FC = () =>
// const { user } = useAuth();

  (
    <SignedProvider>
      <Routes>
        <Route path="/" element={<h1>mid af signed</h1>} />
      </Routes>
    </SignedProvider>
  );
