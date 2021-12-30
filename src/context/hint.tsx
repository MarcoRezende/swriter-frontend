import { createContext, useContext, useEffect, useState } from 'react';
import { GenericObject } from '../interfaces/common';
import { Hint } from '../interfaces/hint';

import { getOneBase } from '../services/common';

export interface HintAPI {
  getOne(filters?: GenericObject): Promise<Hint>;
  randomHint: Hint;
}

export const HintContext = createContext<HintAPI>({} as HintAPI);

export const HintProvider: React.FC = ({ children }) => {
  const [lastRandomHint, setLastRandomHint] = useState<Hint>({} as Hint);

  useEffect(() => {
    (async () => {
      try {
        setLastRandomHint(await getOne());
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const getOne = async (filters?: any): Promise<Hint> => {
    const hint =
      (
        await getOneBase<Hint>({
          resource: 'hint',
          params: filters,
        })
      ).data || {};

    setLastRandomHint(hint);

    return hint;
  };

  return (
    <HintContext.Provider value={{ getOne, randomHint: lastRandomHint }}>
      {children}
    </HintContext.Provider>
  );
};

export const useHint = (): HintAPI => {
  const context = useContext(HintContext);

  if (!context) {
    throw new Error('useHint must be within a HintContext');
  }

  return context;
};
