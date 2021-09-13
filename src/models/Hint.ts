import { BaseEntity } from '../_common/base_entity';

export class Hint extends BaseEntity<Hint> {
  tip!: string;
  categories?: any[];
}
