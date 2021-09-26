import { FormHTMLAttributes, memo } from 'react';
import { Container } from '../styles/components/Form';
import { Button } from './Button';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  title: string;
}

const Form: React.FC<FormProps> = ({ title, children, ...rest }) => {
  return (
    <Container {...rest}>
      <div>
        <div>
          <h2>{title}.</h2>
          <p>Representação especifica de uma tematica.</p>
        </div>
        {children}
        <Button background={'primary'} type="submit">
          Cadastrar
        </Button>
      </div>
    </Container>
  );
};

export default memo(Form);
