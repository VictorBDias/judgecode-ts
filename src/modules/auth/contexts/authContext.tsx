import { createSessionAPI, createUserAPI } from 'modules/auth/apis/sign.apis';
import {
  ICreateSessionAPI,
  ICreateSessionDTO,
} from 'modules/auth/interfaces/dtos/sessions.create.dtos';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
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

const setDefaultsHeaders = (token: string) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

const clearDefaultsHeaders = () => {
  api.defaults.headers.common.authorization = '';
};

const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = useState<any>();

  //* FUNCTIONS
  useEffect(() => {
    const persistedUser = localStorage.getItem('user');
    if (persistedUser) setUser(JSON.parse(persistedUser));
  }, []);

  const handleSignIn = useCallback(async (data: ICreateSessionDTO) => {
    const { uid, password } = data;
    setIsLoading(true);
    try {
      const response = await createSessionAPI({ uid, password });
      setIsLoading(false);
      setDefaultsHeaders(response.data.token.token);
      localStorage.setItem('token', JSON.stringify(response.data.token.token));
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('userId', response.data.user.id);
      setUser(response.data.user);
      if (response) navigate('/forms');
      return response;
    } catch (err) {
      console.log(err);
      return {} as ICreateSessionAPI;
    }
  }, []);

  const handleSignOut = useCallback(() => {
    try {
      clearDefaultsHeaders();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
      if (!user) navigate('/signIn', { replace: true });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSignUp = useCallback(async (data: ICreateUserDTO) => {
    setIsLoading(true);
    try {
      const formattedData = {
        ...data,
        roles: ['a1f347ff-2a17-42cb-8bc9-94693258a412'],
      };
      const response = await createUserAPI(formattedData);
      setUser(data);
      setIsLoading(false);
      return response;
    } catch (err) {
      setIsLoading(false);
      return {} as ICreateUserAPI;
    }
  }, []);
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
