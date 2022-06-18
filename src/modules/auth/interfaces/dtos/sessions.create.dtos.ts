import { APIResponse } from 'shared/interfaces/dtos/apiResponse.dto';

export type ICreateSessionDTO = {
  uid: string;
  password?: string;
};

export type ICreateSessionAPI = APIResponse<{
  type: string;
  token: string;
  expires_at: string;
}>;
