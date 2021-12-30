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
import { errorToast, successToast } from '../utils/toast';

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

  const copyToClipboard = useCallback(
    (toCopy: string) => {
      setPush(!push);

      if (toCopy) {
        navigator.clipboard.writeText(toCopy);
        return successToast('Frase copiada');
      }

      errorToast('Nada para ser copiado');
    },
    [push],
  );

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const closeFilterOnClickOutside = (e: Event) => {
    const target = e?.target as SVGElement;

    if (
      target.id !== 'filterToggler' &&
      target.parentElement?.id !== 'filterToggler'
    ) {
      setIsOpen(false);
    }
  };

  const onFilter = (filters: GenericObject, appliedFiltersLength: number) => {
    setFiltersCount(appliedFiltersLength);

    if (filters?.filter?.length) {
      getRandomHint(filters);
    }

    setFilters(filters);
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

  const sortedCategories = sortBy(hint?.categories || [], 'name', 'name');

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
        {hint ? (
          <div className="content">
            <p className="sentence" onClick={() => copyToClipboard(hint.tip)}>
              <ImQuotesLeft style={{ verticalAlign: 'super' }} /> {hint.tip}{' '}
              <ImQuotesRight />
            </p>

            {hasCategories && (
              <ul>
                {sortedCategories.map(category => (
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
        ) : (
          <div className="content">
            <p>Sem dicas por agora... ¯\_(ツ)_/¯</p>
          </div>
        )}

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
            toggleFilter={() => toggleFilter()}
            closeFilter={e => closeFilterOnClickOutside(e)}
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
            id="filterToggler"
          />

          <Toaster />

          <CopyToClipboard
            size="2rem"
            strokeWidth="0.5px"
            onAnimationEnd={() => setPush(!push)}
            $push={push}
            onClick={() => {
              copyToClipboard(hint?.tip);
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
