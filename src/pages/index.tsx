import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

import { useHint } from '../context/hint';
import { Hint } from '../interfaces/hint';
import {
  Button,
  Container,
  CopyToClipboard,
  HintDetails,
} from '../styles/pages/Home';
import { sortBy } from '../utils/array';
import { HiOutlineFilter as FilterIcon } from 'react-icons/hi';
import { Filter } from '../components/Filter';

const Home: NextPage = () => {
  const { randomHint, getOne } = useHint();
  const { toasts } = useToasterStore();
  const [hint, setHint] = useState<Hint>({} as Hint);
  const [rotate, setRotate] = useState<boolean>(false);
  const [push, setPush] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const hasCategories = !!hint?.categories?.length;

  const TOAST_LIMIT = 1;

  useEffect(() => {
    setHint(randomHint);

    // toasts limiter
    toasts
      .filter(t => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach(t => toast.dismiss(t.id));
  }, [randomHint, toasts]);

  const getRandomHint = useCallback(async () => {
    await getOne();
  }, [getOne]);

  const copyToClipboard = useCallback((toCopy: string) => {
    navigator.clipboard.writeText(toCopy);

    toast.success('Frase copiada!', {
      style: {
        fontFamily: 'Poppins',
        background: '#303030',
        color: '#fff',
      },
      position: 'top-right',
      duration: 3000,
    });
  }, []);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    filterContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.1,
        },
      },
    },
    filterItem: {
      hidden: { y: -20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Swriter | Home</title>
      </Head>
      <Container>
        <div className="content">
          <p className="sentence" onClick={() => copyToClipboard(hint.tip)}>
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

        <div className="buttons">
          <Button
            size="2rem"
            $rotate={rotate}
            strokeWidth="0.5px"
            onClick={() => {
              getRandomHint();
              setRotate(!rotate);
            }}
          />

          <Filter
            animate={isOpen ? 'visible' : 'hidden'}
            variants={variants.filterContainer}
            fieldsetMotion={{
              variants: variants.filterItem,
            }}
            buttonMotion={{
              variants: variants.filterItem,
            }}
            onClose={() => toggleFilter()}
          />

          <FilterIcon
            onClick={() => toggleFilter()}
            size="2rem"
            strokeWidth="0.5px"
          />

          <Toaster />

          <CopyToClipboard
            size="2rem"
            strokeWidth="0.5px"
            onAnimationEnd={() => setPush(!push)}
            $push={push}
            onClick={() => {
              setPush(!push);
              copyToClipboard(hint.tip);
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
