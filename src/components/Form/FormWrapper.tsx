import { FormHTMLAttributes, memo } from 'react';
import { Container } from '../../styles/components/Form/FormWrapper';
import { Button } from '../Button';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  title?: string;
  subtitle?: string;
}

const Form: React.FC<FormProps> = ({ title, subtitle, children, ...rest }) => {
  return (
    <Container {...rest}>
      <div>
        <div>
          {title && <h2>{title}.</h2>}
          {subtitle && <p>{subtitle}</p>}
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
