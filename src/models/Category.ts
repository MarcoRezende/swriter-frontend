import { BaseEntity } from '../_common/base_entity';
import { Hint } from './Hint';

export class Category extends BaseEntity<Category> {
  hint?: Hint;
  name!: string;
  kind!: string;
}
