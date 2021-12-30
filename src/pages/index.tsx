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

import { motion } from 'framer-motion';
import { GenericObject } from '../interfaces/common';

const Home: NextPage = () => {
  const { randomHint, getOne } = useHint();
  const { toasts } = useToasterStore();
  const [hint, setHint] = useState<Hint>({} as Hint);
  const [rotate, setRotate] = useState<boolean>(false);
  const [push, setPush] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<GenericObject>({} as GenericObject);
  const [filtersCount, setFiltersCount] = useState(0);

  const hasCategories = !!hint?.categories?.length;

  const TOAST_LIMIT = 1;

  const getRandomHint = useCallback(
    async (filters: GenericObject) => {
      await getOne(filters);
    },
    [getOne],
  );

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

  const onFilter = (filters: GenericObject, appliedFiltersLength: number) => {
    setFiltersCount(appliedFiltersLength);
    setFilters(filters);
    getRandomHint(filters);
  };

  useEffect(() => {
    setHint(randomHint);

    // toasts limiter
    toasts
      .filter(t => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach(t => toast.dismiss(t.id));
  }, [randomHint, toasts]);

  const appliedFiltersMessage = !filtersCount
    ? `Nenhum filtro`
    : `${filtersCount} ${
        filtersCount > 1 ? 'filtros aplicados' : 'filtro aplicado'
      }`;

  const filterVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.25,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const filterCountVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.05,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
              {/**
               * TODO: remover logica do template
               */}
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
              getRandomHint(filters);
              setRotate(!rotate);
            }}
          />

          <Filter
            animate={isOpen ? 'visible' : 'hidden'}
            variants={filterVariants}
            onClose={() => toggleFilter()}
            onFilter={(filters, appliedFiltersLength) =>
              onFilter(filters, appliedFiltersLength)
            }
          />

          <motion.span
            animate={!isOpen ? 'visible' : 'hidden'}
            variants={filterCountVariants}
          >
            {appliedFiltersMessage}
          </motion.span>

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
