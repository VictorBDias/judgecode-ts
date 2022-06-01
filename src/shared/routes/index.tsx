import React from 'react';

// CUSTOM IMPORTS
import { SignedRoutes } from './Signed.routes';
import { AuthRoutes } from './Auth.routes';
import { useAuth } from '../contexts';

function AppRoutes() {
  const user = 'midaf';
  // const { user } = useAuth();

  return !user ? <SignedRoutes /> : <AuthRoutes />;
}

export { AppRoutes };
