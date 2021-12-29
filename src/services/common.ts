import { api } from '../config/axios';
import { RequestQueryBuilder } from '@nestjsx/crud-request';
import { AxiosResponse } from 'axios';

interface NestPaginateResponse<Entity> {
  count: number;
  data: Entity[];
  page: number;
  pageCount: number;
  total: number;
}

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
  return (await api.get<K[], AxiosResponse<NestPaginateResponse<K>>>(resource))
    .data;
};

export const deleteOneBase = async <K>({ resource, id }: DTO<K>) => {
  return api.delete<K>(`${resource}/${id}`);
};
