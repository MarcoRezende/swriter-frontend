import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { useHint } from '../context/hint';
import { Hint } from '../models/Hint';
import { Container, Button } from '../styles/pages/Home';

import { BsArrowClockwise } from 'react-icons/bs';

const Home: NextPage = () => {
  const { randomHint, getOne } = useHint();
  const [hint, setHint] = useState<Hint>({} as Hint);
  const [rotate, setRotate] = useState<boolean>(false);
  const hasCategories = !!hint?.categories?.length;

  useEffect(() => {
    setHint(randomHint);
  }, [randomHint]);

  const getRandomHint = useCallback(async () => {
    await getOne();
  }, [getOne]);

  return (
    <>
      <Head>
        <title>Swriter | Home</title>
      </Head>
      <Container>
        <div>
          <p className="sentence">{`"${hint.tip}"`}</p>

          {hasCategories && (
            <ul>
              {hint.categories?.map(category => (
                <li key={category.id}>{category.name}</li>
              ))}
            </ul>
          )}

          <div>
            <p>{hint.author || 'Autor desconhecido'}</p>
            <p>{hint.book || 'Origem desconhecida'}</p>
            <p>
              Frase gerada {hint.timesDrawn}{' '}
              {hint.timesDrawn && hint.timesDrawn > 1 ? 'vezes' : 'vez'}
            </p>
          </div>
        </div>

        <Button
          size="2rem"
          $rotate={rotate}
          color="#303030"
          strokeWidth="0.5px"
          onClick={() => {
            getRandomHint();
            setRotate(!rotate);
          }}
        />
      </Container>
    </>
  );
};

export default Home;
