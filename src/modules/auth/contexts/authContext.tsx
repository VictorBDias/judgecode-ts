import { createSessionAPI, createUserAPI } from 'modules/auth/apis/sign.apis';
import {
  ICreateSessionAPI,
  ICreateSessionDTO,
} from 'modules/auth/interfaces/dtos/sessions.create.dtos';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from 'shared/services/api';
import {
  ICreateUserAPI,
  ICreateUserDTO,
} from '../interfaces/dtos/user.create.dtos';
import { IUser } from '../interfaces/sessions.apis.interfaces';

interface AuthContextData {
  handleSignIn: (data: ICreateSessionDTO) => ICreateSessionAPI;
  handleSignUp: (data: ICreateUserDTO) => ICreateUserAPI;
  handleSignOut: any;
  user?: IUser;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const setDefaultsHeaders = (token: any) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  //* STATES
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = useState<any>();

  //* FUNCTIONS
  const handleSignIn = useCallback(async (data: ICreateSessionDTO) => {
    const { uid, password } = data;
    setIsLoading(true);
    try {
      const response = await createSessionAPI({ uid, password });
      setIsLoading(false);
      setDefaultsHeaders(response.data.token.token);
      localStorage.setItem('token', response.data.token.token);
      localStorage.setItem('userId', response.data.user.id);
      setUser(data);
      navigate('/forms', { replace: true });
      return response;
    } catch (err) {
      console.log(err);
      return {} as ICreateSessionAPI;
    }
  }, []);

  const handleSignUp = useCallback(async (data: ICreateUserDTO) => {
    setIsLoading(true);
    try {
      const forattedData = {
        ...data,
        roles: ['a1f347ff-2a17-42cb-8bc9-94693258a412'],
      };
      const response = await createUserAPI(forattedData);
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
