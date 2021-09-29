import { InputHTMLAttributes, useCallback, useState } from 'react';
import { Container } from '../../styles/components/Form/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register: any;
  value: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  register,
  value,
  required,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback((status: boolean) => {
    setIsFocused(status);
  }, []);

  return (
    <Container
      isFilled={!!value}
      isFocused={isFocused}
      onBlur={() => handleFocus(false)}
      onFocus={() => handleFocus(true)}
    >
      <input {...rest} {...register} />
      {label && <label htmlFor="">{label}</label>}
    </Container>
  );
};
