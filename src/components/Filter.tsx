import { RequestQueryBuilder } from '@nestjsx/crud-request';
import { motion } from 'framer-motion';

import { Button } from './Button';

import { RiSearch2Line as SearchIcon } from 'react-icons/ri';
import { CgClose as CloseIcon } from 'react-icons/cg';

import { HTMLMotionProps } from 'framer-motion';

import { useForm } from 'react-hook-form';
import { useCategory } from '../context/category';
import { useTheme } from '../context/theme';

import { Container, Select } from '../styles/components/Filter';

type FilterOptions = 'search' | 'theme' | 'categories';

interface SelectOption {
  value: string;
  label: string;
}

interface FormData {
  search: string;
  categories: SelectOption[];
  theme: SelectOption;
}

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface FilterProps extends HTMLMotionProps<'form'> {
  onClose?(): void;
  onFilter?(
    filters: { [key: string]: any },
    appliedFiltersLength: number,
  ): void;
}

export const Filter: React.FC<FilterProps> = ({
  onClose = () => {},
  onFilter = () => {},
  ...rest
}) => {
  const { handleSubmit, register, control } = useForm();
  const { categories } = useCategory();
  const { themes } = useTheme();

  const onSubmit = (filters: FormData) => {
    let appliedFiltersLength = 0;

    const query = RequestQueryBuilder.create();

    for (const [field, value] of Object.entries(filters)) {
      if (
        value &&
        (typeof value === 'string' ||
          (typeof value === 'object' && Object.keys(value).length))
      ) {
        appliedFiltersLength += 1;

        switch (field as FilterOptions) {
          case 'search':
            query.setFilter({
              field: 'tip',
              operator: '$cont',
              value,
            });
            break;

          case 'categories':
            query.setFilter({
              field: 'categories.name',
              operator: '$in',
              value: value.map((category: SelectOption) => category.value),
            });
            break;

          case 'theme':
            query.setFilter({
              field: 'categories.theme.name',
              operator: '$eq',
              value: value.value,
            });
            break;
        }
      }
    }

    onFilter(query.queryObject, appliedFiltersLength);
  };

  const selectCategories = categories.map(category => ({
    label: category.name,
    value: category.name,
  }));

  const selectThemes = themes.map(theme => ({
    label: theme.name,
    value: theme.name,
  }));

  return (
    <Container onSubmit={handleSubmit(onSubmit)} {...rest}>
      <CloseIcon size={20} onClick={() => onClose()} />

      <motion.fieldset variants={itemVariants}>
        <span>Filtrar</span>
        <label htmlFor="search">
          <input
            {...register('search')}
            id="search"
            type="text"
            placeholder="buscar por termo"
            autoComplete="nope"
          />
          <div>
            <SearchIcon size={20} />
          </div>
        </label>
      </motion.fieldset>

      <motion.fieldset variants={itemVariants}>
        <span>Categorias</span>
        <Select
          options={selectCategories}
          register={register}
          noOptionsMessage={() => 'Nenhum valor disponível'}
          control={control}
          name="categories"
          placeholder="selecione"
          isMulti
        />
      </motion.fieldset>

      <motion.fieldset variants={itemVariants}>
        <span>Tema</span>
        <Select
          options={selectThemes}
          register={register}
          noOptionsMessage={() => 'Nenhum valor disponível'}
          control={control}
          name="theme"
          placeholder="selecione"
        />
      </motion.fieldset>

      <Button
        onClick={() => onClose()}
        variants={itemVariants}
        background={'primary'}
        type="submit"
      >
        Aplicar
      </Button>
    </Container>
  );
};
