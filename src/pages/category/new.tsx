import Head from 'next/head';
import { CategoryForm } from '../../components/CategoryForm';
import { Container } from '../../styles/components/CategoryForm';

const NewCategory: React.FC = () => {
  return (
    <>
      <Head>
        <title>Swriter | Nova categoria</title>
      </Head>
      <Container>
        <CategoryForm />
      </Container>
    </>
  );
};

export default NewCategory;
