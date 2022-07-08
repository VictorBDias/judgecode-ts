import { createSessionAPI, createUserAPI } from 'modules/auth/apis/sign.apis';
import {
  ICreateSessionAPI,
  ICreateSessionDTO,
} from 'modules/auth/interfaces/dtos/sessions.create.dtos';
import React, { createContext, useCallback, useContext, useState } from 'react';
import {
  ICreateUserAPI,
  ICreateUserDTO,
} from '../interfaces/dtos/user.create.dtos';
import { IUser } from '../interfaces/sessions.apis.interfaces';

interface AuthContextData {
  handleSignIn: (data: ICreateSessionDTO) => ICreateSessionAPI;
  handleSignUp: ({ data }: ICreateUserDTO) => ICreateUserAPI;
  handleSignOut: any;
  user?: IUser;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  // STATES
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = useState<any>();

  // FUNCTIONS
  const handleSignIn = useCallback(async (data: ICreateSessionDTO) => {
    const { uid, password } = data;
    setIsLoading(true);
    try {
      const response = await createSessionAPI({ uid, password });
      setIsLoading(false);

      setUser(data);
      return response;
    } catch (err) {
      console.log(err);
      return {} as ICreateSessionAPI;
    }
  }, []);

  const handleSignUp = useCallback(async ({ data }: ICreateUserDTO) => {
    setIsLoading(true);
    try {
      const response = await createUserAPI({ data });
      setUser(data);
      setIsLoading(false);
      return response;
    } catch (err) {
      setIsLoading(false);
      return {} as ICreateUserAPI;
    }
  }, []);
  const handleSignOut = useCallback(() => {}, []);
  return (
    <AuthContext.Provider
      value={{
        // STATES
        user,
        isLoading,
        // FUNCTIONS
        handleSignIn,
        handleSignUp,
        handleSignOut,
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
