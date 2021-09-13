import { InputHTMLAttributes } from 'react';
import { Container } from '../styles/components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <Container>
      {label && <label htmlFor="">{label}</label>}
      <input {...rest} />
    </Container>
  );
};
