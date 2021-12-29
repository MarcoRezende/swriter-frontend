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

interface FilterProps extends HTMLMotionProps<'form'> {
  onClose?(): void;
  fieldsetMotion?: HTMLMotionProps<'fieldset'>;
  buttonMotion?: HTMLMotionProps<'button'>;
}

export const Filter: React.FC<FilterProps> = ({
  onClose = () => {},
  fieldsetMotion,
  buttonMotion,
  ...rest
}) => {
  const { handleSubmit, register, control, watch } = useForm();

  const onSubmit = ({ search, theme, categories }: FormData) => {};

  return (
    <Container onSubmit={handleSubmit(onSubmit)} {...rest}>
      <CloseIcon size={20} onClick={() => onClose()} />

      <motion.fieldset {...fieldsetMotion}>
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

      <motion.fieldset {...fieldsetMotion}>
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

      <motion.fieldset {...fieldsetMotion}>
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
      <Button {...buttonMotion} background={'primary'} type="submit">
        Buscar
      </Button>
    </Container>
  );
};
