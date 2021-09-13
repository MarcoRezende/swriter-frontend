import { createOne } from '../pages/api/common';
import { Container } from '../styles/components/CategoryForm';
import { Input } from './Input';
import { useForm } from 'react-hook-form';
import { Category } from '../models/Category';

interface CategoryFormProps {
  title?: string;
}

interface CreateCategoryProps {
  name: string;
  kind: string;
}

export const CategoryForm: React.FC<CategoryFormProps> = ({ title }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSubmitNewCategory = async ({ name }: CreateCategoryProps) => {
    const category: Category = {
      name,
      kind: 'Humor',
    };

    console.log('creating -->', category);

    await createOne({ resource: 'category', data: category });
  };

  return (
    <Container
      autoComplete="off"
      onSubmit={handleSubmit(handleSubmitNewCategory)}
    >
      <div>
        <h2>{title || 'Nova Categoria'}</h2>
        <Input
          placeholder="Nome"
          register={register('name', { required: true, maxLength: 20 })}
        />
        <button type="submit">Cadastrar</button>
      </div>
    </Container>
  );
};
