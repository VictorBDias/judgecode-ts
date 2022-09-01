import { APIResponse } from 'shared/interfaces/dtos';
import { IPaginationAPI } from 'shared/interfaces/dtos/pagination.dto';

export type IListQuestionsAPI = APIResponse<{
  data: any[];
  meta: IPaginationAPI;
}>;
export type IListQuestionsDTO = {
  page: number;
  perPage?: number;
  search?: string;
};
