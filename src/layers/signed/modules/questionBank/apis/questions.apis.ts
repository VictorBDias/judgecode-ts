import api from 'shared/services/api';
import {
  IListQuestionsAPI,
  IListQuestionsDTO,
} from '../interfaces/dtos/questions.list.dtos';

import {
  ICreateQuestionsAPI,
  ICreateQuestionsDTO,
} from '../interfaces/dtos/questions.create.dtos';
import {
  IUpdateQuestionsAPI,
  IUpdateQuestionsDTO,
} from '../interfaces/dtos/questions.update.dtos';
import {
  IDeleteQuestionsAPI,
  IDeleteQuestionsDTO,
} from '../interfaces/dtos/questions.delete.dtos';

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
export const createQuestionsAPI = (
  data: ICreateQuestionsDTO,
): ICreateQuestionsAPI => api.post('/admin/problems', data);

export const updateQuestionsAPI = ({
  id,
  data,
}: IUpdateQuestionsDTO): IUpdateQuestionsAPI =>
  api.put(`/admin/problems/${id}`, data);

export const deleteQuestionsAPI = ({
  id,
}: IDeleteQuestionsDTO): IDeleteQuestionsAPI =>
  api.delete(`/admin/problems/${id}`);
