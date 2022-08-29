import { APIResponse } from 'shared/interfaces/dtos';
import { IPaginationAPI } from 'shared/interfaces/dtos/pagination.dto';

export type IListFormsAPI = APIResponse<{
  data: any[];
  meta: IPaginationAPI;
}>;
export type IListFormsDTO = {
  page: number;
  perPage?: number;
  search?: string;
};
