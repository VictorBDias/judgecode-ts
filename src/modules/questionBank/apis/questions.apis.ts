import api from 'shared/services/api';
import {
  IListQuestionsAPI,
  IListQuestionsDTO,
} from '../interfaces/dtos/questions.list.dtos';

export const listQuestionsAPI = ({
  page,
  perPage,
  search,
}: IListQuestionsDTO): IListQuestionsAPI =>
  api.get('/admin/problems', {
    params: {
      page,
      per_page: perPage,
      search,
    },
  });
