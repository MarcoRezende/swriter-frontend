import { CategoryProvider } from './category';
import { HintProvider } from './hint';

const AppProvider: React.FC = ({ children }) => (
  <HintProvider>
    <CategoryProvider>{children}</CategoryProvider>
  </HintProvider>
);

export default AppProvider;
