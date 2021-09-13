import type { NextPage } from 'next';
import Head from 'next/head';
import { CategoryForm } from '../../components/CategoryForm';
import { Container } from '../../styles/components/CategoryForm';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Swriter | Home</title>
      </Head>
      <Container>
        <CategoryForm />
      </Container>
    </>
  );
};

export default Home;
