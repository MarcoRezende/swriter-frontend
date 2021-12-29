import { Container, Input, Select } from '../styles/components/Filter';
import { Button } from './Button';

import { RiSearch2Line as SearchIcon } from 'react-icons/ri';
import { CgClose as CloseIcon } from 'react-icons/cg';
import { useForm } from 'react-hook-form';

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

export const Filter: React.FC = () => {
  const { handleSubmit, register, control, watch } = useForm();

  const onSubmit = ({ search, theme, categories }: FormData) => {};

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <CloseIcon size={20} />

      <fieldset>
        <span>Filtrar</span>
        <label htmlFor="search">
          <Input
            hasValue={!!watch('search')}
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
      </fieldset>

      <fieldset>
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
      </fieldset>

      <fieldset>
        <span>Tema</span>
        <Select
          options={[]}
          register={register}
          noOptionsMessage={() => 'Nenhum valor disponível'}
          control={control}
          name="theme"
          placeholder="selecione"
        />
      </fieldset>
      <Button background={'primary'} type="submit">
        Buscar
      </Button>
    </Container>
  );
};
