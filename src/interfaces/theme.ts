import { BaseEntity } from '../_common/base_entity';
import { Category } from './category';

export class Theme extends BaseEntity<Theme> {
  name!: string;
  categories!: Category[];
}
