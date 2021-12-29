import { Container, Select } from '../styles/components/Filter';
import { Button } from './Button';

import { RiSearch2Line as SearchIcon } from 'react-icons/ri';
import { CgClose as CloseIcon } from 'react-icons/cg';
import { useForm } from 'react-hook-form';

import { HTMLMotionProps } from 'framer-motion';

import { motion } from 'framer-motion';

interface FormData {
  search: string;
  theme: {
    value: string;
    label: string;
  };
  categories: Array<{
    value: string;
    label: string;
  }>;
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
  onFilter?(filters: FormData, appliedFiltersLength: number): void;
}

export const Filter: React.FC<FilterProps> = ({
  onClose = () => {},
  onFilter = () => {},
  ...rest
}) => {
  const { handleSubmit, register, control, watch } = useForm();

  const onSubmit = (filters: FormData) => {
    let appliedFiltersLength = 0;

    for (const [, value] of Object.entries(filters)) {
      if (value) {
        appliedFiltersLength += 1;
      }
    }

    onFilter(filters, appliedFiltersLength);
  };

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
          options={[]}
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
          options={[]}
          register={register}
          noOptionsMessage={() => 'Nenhum valor disponível'}
          control={control}
          name="theme"
          placeholder="selecione"
        />
      </motion.fieldset>
      {/**
       * TODO: fechar menu ao clicar
       */}
      <Button variants={itemVariants} background={'primary'} type="submit">
        Buscar
      </Button>
    </Container>
  );
};
