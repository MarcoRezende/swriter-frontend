import { api } from '../../config/axios';

export const createOne = async ({
  resource,
  data,
}: {
  resource: string;
  data: any;
}) => {
  return api.post(resource, data);
};

export const getMany = async ({ resource }: { resource: string }) => {
  return api.get(resource);
};

export const deleteOne = async ({
  resource,
  id,
  data,
}: {
  resource: string;
  id: string;
  data: any;
}) => {
  return api.delete(`${resource}/${id}`, data);
};
