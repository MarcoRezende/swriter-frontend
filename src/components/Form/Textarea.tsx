import { TextareaHTMLAttributes, useCallback, useState } from 'react';
import { Container } from '../../styles/components/Form/Textarea';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  register: any;
  value: string;
}

export const Textarea: React.FC<InputProps> = ({
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
      <textarea {...rest} {...register} />
      {label && <label htmlFor="">{label}</label>}
    </Container>
  );
};
