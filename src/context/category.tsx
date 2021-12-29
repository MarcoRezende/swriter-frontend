import { createContext, useContext } from 'react';
import { Category } from '../interfaces/category';

const RESOURCE = 'categories';

export interface CategoryAPI {}

export const CategoryContext = createContext<CategoryAPI>({} as CategoryAPI);

export const CategoryProvider: React.FC = ({ children }) => {
  return (
    <CategoryContext.Provider value={{}}>{children}</CategoryContext.Provider>
  );
};

export const useCategory = (): CategoryAPI => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useCategory must be within a CategoryContext');
  }

  return context;
};
