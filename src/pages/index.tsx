import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

import { useHint } from '../context/hint';
import { Hint } from '../models/Hint';
import { Button, Container, HintDetails } from '../styles/pages/Home';
import { sortBy } from '../utils/array';

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
          <p className="sentence">
            <ImQuotesLeft style={{ verticalAlign: 'super' }} /> {hint.tip}{' '}
            <ImQuotesRight />
          </p>

          {hasCategories && (
            <ul>
              {sortBy(hint.categories || [], 'name', 'name')?.map(category => (
                <li key={category.id}>{category.name}</li>
              ))}
            </ul>
          )}

          <HintDetails>
            <p className="author">{hint.author || 'Autor desconhecido'}</p>
            <p className="book">{hint.book || 'Origem desconhecida'}</p>
            <p className="times-drawn">
              Frase gerada <strong>{hint.timesDrawn} </strong>
              {hint.timesDrawn && hint.timesDrawn > 1 ? 'vezes' : 'vez'}
            </p>
          </HintDetails>
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
