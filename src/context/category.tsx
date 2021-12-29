import { createContext, useContext } from 'react';
import { Category } from '../models/category.model';
import { categoryResource } from '../pages/api/category';

import { createOneBase } from '../pages/api/common';

export interface CategoryAPI {
  createOne(categoryDto: Category): Promise<Category>;
}

export const CategoryContext = createContext<CategoryAPI>({} as CategoryAPI);

export const CategoryProvider: React.FC = ({ children }) => {
  const createOne = async (categoryDto: Category): Promise<Category> => {
    const category = new Category(categoryDto);

    return (
      (
        await createOneBase<Category>({
          resource: categoryResource,
          data: category,
        })
      ).data || {}
    );
  };

  return (
    <CategoryContext.Provider value={{ createOne }}>
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
