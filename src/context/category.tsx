import { createContext, useContext, useEffect, useState } from 'react';
import { Category } from '../interfaces/category';
import { getManyBase } from '../services/common';

export interface CategoryAPI {
  getCategories(): Promise<Category[]>;
  categories: Category[];
}

const controller = 'app/category';

export const CategoryContext = createContext<CategoryAPI>({} as CategoryAPI);

export const CategoryProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };

    fetchData();
  }, []);

  const getCategories = async () => {
    return (await getManyBase<Category>({ resource: controller })).data;
  };

  return (
    <CategoryContext.Provider value={{ getCategories, categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = (): CategoryAPI => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useCategory must be within a CategoryContext');
  }

  return context;
};
