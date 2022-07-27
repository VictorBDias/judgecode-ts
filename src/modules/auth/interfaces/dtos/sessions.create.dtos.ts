import { APIResponse } from 'shared/interfaces/dtos/apiResponse.dto';
import { IToken, IUser } from '../sessions.apis.interfaces';

export type ICreateSessionDTO = {
  uid: string;
  password?: string;
};

export type ICreateSessionAPI = APIResponse<{
  user: IUser;
  token: IToken;
}>;
