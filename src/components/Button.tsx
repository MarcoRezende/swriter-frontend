import { ButtonHTMLAttributes, memo } from 'react';
import { Container } from '../styles/components/Button';
import { ColorTypes } from '../styles/global';
import { HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  background: ColorTypes;
}

export const Button: React.FC<ButtonProps> = memo(function Button({
  children,
  background,
  ...rest
}) {
  return (
    <Container background={background} {...rest}>
      {children}
    </Container>
  );
});
