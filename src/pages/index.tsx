import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '../styles/pages/Home';
import Category from './category';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Swriter | Home</title>
      </Head>
      <Container>
        <Category />
      </Container>
    </>
  );
};

export default Home;
