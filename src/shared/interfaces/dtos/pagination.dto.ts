export interface IPaginationDTO {
  page: number;
  perPage?: number;
}

export interface IPaginationAPI {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}
