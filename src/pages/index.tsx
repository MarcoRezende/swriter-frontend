import type { NextPage } from 'next';
import Head from 'next/head';
import { CreateCategory } from '../components/CreateCategory';
import { Container } from '../styles/pages/Home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Swriter | Home</title>
      </Head>
      <Container>
        <CreateCategory />
      </Container>
    </>
  );
};

export default Home;
