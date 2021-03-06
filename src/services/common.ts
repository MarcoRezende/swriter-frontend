import { api } from '../config/axios';
import { AxiosResponse } from 'axios';
import { GenericObject } from '../interfaces/common';
import { errorToast } from '../utils/toast';

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
  params?: GenericObject;
}

export const getOneBase = async <K>({ resource, params }: DTO<K>) => {
  try {
    return (await api.get<K>(`${resource}`, { params })).data;
  } catch {
    errorToast('Nenhuma frase encontrada!');
  }
};

export const getManyBase = async <K>({ resource }: DTO<K>): Promise<K> => {
  try {
    return (await api.get<K[], AxiosResponse<K>>(resource)).data;
  } catch {
    errorToast();
    throw new Error();
  }
};
