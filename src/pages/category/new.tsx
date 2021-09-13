import Head from 'next/head';
import { CategoryForm } from '../../components/CategoryForm';

const NewCategory: React.FC = () => {
  return (
    <>
      <Head>
        <title>Swriter | Nova categoria</title>
      </Head>
      <CategoryForm />
    </>
  );
};

export default NewCategory;
