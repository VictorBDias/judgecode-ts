import api from 'shared/services/api';

export const guestShowFormApi = (id: string) =>
  api.get(`/guest/categories/${id}`);
