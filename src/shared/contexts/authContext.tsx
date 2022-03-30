import React, { createContext, useContext } from 'react';

interface AuthContextData {
  signIn: any;
  signUp: any;
  signOut: any;
  user?: any;
  isLoaded: any;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  // STATES
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [user, setUser] = React.useState();

  // FUNCTIONS
  const signIn = React.useCallback((data) => {}, []);

  const signUp = React.useCallback((data) => {}, []);

  const signOut = React.useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        // STATES
        user,
        isLoaded,
        // FUNCTIONS
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within AuthProvider');

  return context;
};

export { AuthProvider, useAuth };
