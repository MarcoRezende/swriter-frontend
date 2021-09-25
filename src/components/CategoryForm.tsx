import { Container } from '../styles/components/CategoryForm';
import { Input } from './Input';
import { useForm } from 'react-hook-form';
import { Category } from '../models/Category';
import { useCategory } from '../context/category';

interface CategoryFormProps {
  title?: string;
}

export const CategoryForm: React.FC<CategoryFormProps> = ({ title }) => {
  const { createOne } = useCategory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSubmitNewCategory = async ({ name, kind }: Category) => {
    const category: Category = {
      name,
      kind,
    };

    console.log('creating -->', category);

    await createOne(category);
  };

  return (
    <Container
      autoComplete="off"
      onSubmit={handleSubmit(handleSubmitNewCategory)}
    >
      <div>
        <div>
          <h2>{title || 'Nova Categoria'}.</h2>
          <p>Representação especifica de uma tematica.</p>
        </div>
        <Input
          label="Nome"
          placeholder="nova categoria"
          register={register('name', { required: true, maxLength: 20 })}
        />

        <Input
          label="Tema"
          placeholder="selecione"
          register={register('kind', { required: true, maxLength: 20 })}
        />
        <button type="submit">Cadastrar</button>
      </div>
    </Container>
  );
};
