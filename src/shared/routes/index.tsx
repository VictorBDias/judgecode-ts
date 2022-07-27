import React from 'react';

// CUSTOM IMPORTS
import { useAuth } from 'modules/auth/contexts';
import { SignedRoutes } from './Signed.routes';
import { AuthRoutes } from './Auth.routes';

function AppRoutes() {
  const { user } = useAuth();
  const persistedUserId = localStorage.getItem('userId');
  return user || persistedUserId ? <SignedRoutes /> : <AuthRoutes />;
}

export { AppRoutes };
