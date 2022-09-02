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
): ICreateQuestionsAPI =>
  api.post('/admin/problems', {
    ...data,
    category_id: '420c6a7e-6c15-4faa-b909-374f91ae67ac',
  });

export const updateQuestionsAPI = ({
  id,
  data,
}: IUpdateQuestionsDTO): IUpdateQuestionsAPI =>
  api.put(`/admin/problems/${id}`, {
    ...data,
    category_id: '420c6a7e-6c15-4faa-b909-374f91ae67ac',
  });

export const deleteQuestionsAPI = ({
  id,
}: IDeleteQuestionsDTO): IDeleteQuestionsAPI =>
  api.delete(`/admin/problems/${id}`);
