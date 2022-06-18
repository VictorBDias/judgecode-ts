import { APIResponse } from './apiResponse.dto';
import { IPaginationAPI, IPaginationDTO } from './pagination.dto';

export type IListAPI<T> = APIResponse<{
  data: T[];
  meta: IPaginationAPI;
}>;

export type IListDTO = IPaginationDTO & {
  search?: string;
  isMounted?: boolean;
};
