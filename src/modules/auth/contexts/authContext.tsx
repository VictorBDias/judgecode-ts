import { createSessionAPI, createUserAPI } from 'modules/auth/apis/sign.apis';
import {
  ICreateSessionAPI,
  ICreateSessionDTO,
} from 'modules/auth/interfaces/dtos/sessions.create.dtos';
import React, { createContext, useContext } from 'react';
import {
  ICreateUserAPI,
  ICreateUserDTO,
} from '../interfaces/dtos/user.create.dtos';
import { IUser } from '../interfaces/sessions.apis.interfaces';

interface AuthContextData {
  signIn: (data: ICreateSessionDTO) => ICreateSessionAPI;
  signUp: ({ data }: ICreateUserDTO) => ICreateUserAPI;
  signOut: any;
  user?: IUser;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  // STATES
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState<any>();

  // FUNCTIONS
  const signIn = React.useCallback(async (data: ICreateSessionDTO) => {
    setIsLoading(true);
    try {
      const response = await createSessionAPI(data);
      setIsLoading(false);

      setUser(data);
      return response;
    } catch (err) {
      console.log(err);
      return {} as ICreateSessionAPI;
    }
  }, []);

  const signUp = React.useCallback(async ({ data }: ICreateUserDTO) => {
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
  const signOut = React.useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        // STATES
        user,
        isLoading,
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
