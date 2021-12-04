import { api } from '../../config/axios';
import { RequestQueryBuilder } from '@nestjsx/crud-request';

interface DTO<T> {
  resource: string;
  data?: Partial<T>;
  id?: Partial<T>;
  params?: RequestQueryBuilder;
}

export const createOneBase = async <K>({ resource, data }: DTO<K>) => {
  return api.post<K>(resource, data);
};

export const getOneBase = async <K>({ resource, params }: DTO<K>) => {
  return api.get<K>(`${resource}/random`, { params: params?.queryString });
};

export const getManyBase = async <K>({ resource }: DTO<K>) => {
  return api.get<K[]>(resource);
};

export const deleteOneBase = async <K>({ resource, id }: DTO<K>) => {
  return api.delete<K>(`${resource}/${id}`);
};
