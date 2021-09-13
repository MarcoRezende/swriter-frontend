import { DeepPartial } from 'typeorm/browser';

export class BaseEntity<T> {
  constructor(obj?: DeepPartial<T>) {
    Object.assign(this, obj);
  }

  id?: number;
  createdDate?: Date;
  updatedDate?: Date;
}
