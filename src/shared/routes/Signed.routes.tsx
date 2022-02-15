import React from 'react';
import { Routes, Route } from 'react-router-dom';

// CUSTOM IMPORTS
// import { FormList } from '@modules/forms/pages';
import { FormList } from '../../modules/forms/pages';
import { SignedProvider } from '../contexts';

// ELEMENTS

export const SignedRoutes: React.FC = () =>
// const { user } = useAuth();

  (
    <SignedProvider>
      <Routes>
        <Route path="/" element={<FormList />} />
      </Routes>
    </SignedProvider>
  );
