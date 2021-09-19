import { InputHTMLAttributes } from 'react';
import { Container } from '../styles/components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register: any;
}

export const Input: React.FC<InputProps> = ({
  label,
  register,
  required,
  ...rest
}) => {
  return (
    <Container>
      <input {...rest} {...register} />
      {label && <label htmlFor="">{label}</label>}
    </Container>
  );
};
