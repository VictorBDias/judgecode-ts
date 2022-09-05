import api from 'shared/services/api';
import {
  ICreateFormsAPI,
  ICreateFormsDTO,
} from '../interfaces/dtos/forms.create.dtos';
import {
  IUpdateFormsAPI,
  IUpdateFormsDTO,
} from '../interfaces/dtos/forms.update.dtos';
import {
  IDeleteFormsAPI,
  IDeleteFormsDTO,
} from '../interfaces/dtos/forms.delete.dtos';
import {
  IListFormsAPI,
  IListFormsDTO,
} from '../interfaces/dtos/forms.list.dtos';
import {
  IShowFormsAPI,
  IShowFormsDTO,
} from '../interfaces/dtos/forms.show.dtos';

export const listFormsAPI = ({
  page,
  perPage,
  search,
}: IListFormsDTO): IListFormsAPI =>
  api.get('/admin/categories', {
    params: {
      page,
      per_page: perPage,
      search,
    },
  });
export const createFormsAPI = (data: ICreateFormsDTO): ICreateFormsAPI =>
  api.post('/admin/categories', data);

export const updateFormsAPI = ({
  id,
  data,
}: IUpdateFormsDTO): IUpdateFormsAPI =>
  api.put(`/admin/categories/${id}`, data);

export const deleteFormsAPI = ({ id }: IDeleteFormsDTO): IDeleteFormsAPI =>
  api.delete(`/admin/categories/${id}`);

export const showFormsApi = ({ id }: IShowFormsDTO): IShowFormsAPI =>
  api.get(`/admin/categories/${id}`);
