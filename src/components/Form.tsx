import { FormHTMLAttributes, memo } from 'react';
import { Container } from '../styles/components/Form';

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
        <button type="submit">Cadastrar</button>
      </div>
    </Container>
  );
};

export default memo(Form);
