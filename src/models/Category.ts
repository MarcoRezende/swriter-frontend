import { BaseEntity } from '../_common/base_entity';

export class Category extends BaseEntity<Category> {
  name!: string;
  kind!: string;
}
