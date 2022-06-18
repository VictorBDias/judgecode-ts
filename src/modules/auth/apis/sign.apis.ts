import api from 'shared/services/api';
import {
  ICreateSessionAPI,
  ICreateSessionDTO,
} from '../interfaces/dtos/sessions.create.dtos';
import {
  ICreateUserAPI,
  ICreateUserDTO,
} from '../interfaces/dtos/user.create.dtos';

export const createSessionAPI = ({
  uid,
  password,
}: ICreateSessionDTO): ICreateSessionAPI =>
  api.post('/login', { uid, password });

export const createUserAPI = ({ data }: ICreateUserDTO): ICreateUserAPI =>
  api.post('/admin/users', data);
