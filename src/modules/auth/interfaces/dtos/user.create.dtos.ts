import { APIResponse } from 'shared/interfaces/dtos/apiResponse.dto';
import { IUser } from '../sessions.apis.interfaces';

export type ICreateUserDTO = {
  data: IUser;
};

export type ICreateUserAPI = APIResponse<any>;
