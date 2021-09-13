import { BaseEntity } from '../_common/base_entity';
import { Category } from './Category';

export class Hint extends BaseEntity<Hint> {
  tip!: string;
  categories?: Category[];
}
