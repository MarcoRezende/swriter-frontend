import { FormEvent, useState } from 'react';
import { createOne, getMany } from '../pages/api/common';
import { Container } from '../styles/components/CategoryForm';
import { Input } from './Input';

interface CategoryFormProps {
  title?: string;
}

export const CategoryForm: React.FC<CategoryFormProps> = ({ title }) => {
  const [category, setCategory] = useState<string>('');

  const handleInputChange = (value: string) => {
    setCategory(value);
  };

  const handleSubmitNewCategory = async (e: FormEvent) => {
    e.preventDefault();

    const newCategory = {
      name: category,
      kind: 'Humor',
    };

    console.log('creating -->', newCategory);

    await createOne({ resource: 'mood', data: newCategory });
  };

  return (
    <Container onSubmit={e => handleSubmitNewCategory(e)}>
      <div>
        <h2>{title || 'Nova Categoria'}</h2>
        <Input
          placeholder="Nome"
          onChange={e => handleInputChange(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </div>
    </Container>
  );
};
