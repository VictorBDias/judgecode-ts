import React from 'react';

// CUSTOM IMPORTS
import { useAuth } from 'layers/auth/contexts';
import { SignedRoutes } from './Signed.routes';
import { AuthRoutes } from './Auth.routes';

function AppRoutes() {
  const { user } = useAuth();
  const persistedUser = localStorage.getItem('user');
  return user || persistedUser ? <SignedRoutes /> : <AuthRoutes />;
}

export { AppRoutes };
