import { BaseEntity } from '../_common/base_entity';
import { Category } from './Category';

export class Hint extends BaseEntity<Hint> {
  tip!: string;
  categories?: Category[];
  name!: string;
  author?: string;
  book?: string;
  timesDrawn?: number;
  bookmarked?: boolean;
}
