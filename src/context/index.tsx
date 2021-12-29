import { CategoryProvider } from './category';
import { HintProvider } from './hint';
import { ThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => (
  <HintProvider>
    <ThemeProvider>
      <CategoryProvider>{children}</CategoryProvider>
    </ThemeProvider>
  </HintProvider>
);

export default AppProvider;
