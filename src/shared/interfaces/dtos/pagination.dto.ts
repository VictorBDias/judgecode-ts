export type IPaginationAPI = {
  total: number;
  per_page: number;
  page: number;
  current_page: number;
  last_page: number;
};

export interface PaginationResponse {
  lastPage: number;
  page: number;
  perPage: number;
  total: string;
}
