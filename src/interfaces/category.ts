import { BaseEntity } from '../_common/base_entity';
import { Hint } from './hint';
import { Theme } from './theme';

export class Category extends BaseEntity<Category> {
  hint?: Hint;
  name!: string;
  theme!: Theme;
}
