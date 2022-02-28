import { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '../interfaces/theme';
import { getManyBase } from '../services/common';

const controller = 'app/theme';

export interface ThemeAPI {
  getThemes(): Promise<Theme[]>;
  themes: Theme[];
}

export const ThemeContext = createContext<ThemeAPI>({} as ThemeAPI);

export const ThemeProvider: React.FC = ({ children }) => {
  const [themes, setThemes] = useState<Theme[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedThemes = await getThemes();
      setThemes(fetchedThemes);
    };

    fetchData();
  }, []);

  const getThemes = async () => {
    return (await getManyBase<Theme>({ resource: controller })).data;
  };

  return (
    <ThemeContext.Provider value={{ getThemes, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeAPI => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be within a ThemeContext');
  }

  return context;
};
