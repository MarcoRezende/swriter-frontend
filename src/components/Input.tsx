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
      {label && <label htmlFor="">{label}</label>}
      <input {...rest} {...register} />
    </Container>
  );
};
