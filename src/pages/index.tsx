import type { NextPage } from 'next';
import Head from 'next/head';
import { CreateCategory } from '../components/CreateCategory';
import { Input } from '../components/Input';
import { Container } from '../styles/pages/Home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Swriter | Home</title>
      </Head>
      <Container>
        <CreateCategory>
          <Input placeholder="Nome" />
        </CreateCategory>
      </Container>
    </>
  );
};

export default Home;
