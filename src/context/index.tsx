import { CategoryProvider } from './category';

const AppProvider: React.FC = ({ children }) => (
  <CategoryProvider>{children}</CategoryProvider>
);

export default AppProvider;
