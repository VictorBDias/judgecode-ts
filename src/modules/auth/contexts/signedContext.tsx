import React, { createContext, useContext } from 'react';

// CUSTOM IMPORTS
import { SideNavigation } from '../components/templates';

interface SignedContextData {}

const SignedContext = createContext<SignedContextData>({} as SignedContextData);

const SignedProvider: React.FC = ({ children }) => (
  <SignedContext.Provider value={{}}>
    <SideNavigation>{children}</SideNavigation>
  </SignedContext.Provider>
);

const useSigned = (): SignedContextData => {
  const context = useContext(SignedContext);

  if (!context) throw new Error('useSigned must be used within SignedProvider');

  return context;
};

export { SignedProvider, useSigned };
