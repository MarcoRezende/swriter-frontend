import { BaseEntity } from '../_common/base_entity';
import { Hint } from './hint.model';
import { Theme } from './theme.model';

export class Category extends BaseEntity<Category> {
  hint?: Hint;
  name!: string;
  theme!: Theme;
}
