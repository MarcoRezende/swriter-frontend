import { Container } from '../styles/components/CreateCategory';

interface CreateCategoryProps {
  title?: string;
}

export const CreateCategory: React.FC<CreateCategoryProps> = ({
  title,
  children,
}) => {
  return (
    <Container>
      <div>
        <h2>{title || 'Nova Categoria'}</h2>
        {children}
        <button type="submit">Cadastrar</button>
      </div>
    </Container>
  );
};
