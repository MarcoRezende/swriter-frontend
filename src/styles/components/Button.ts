import { darken } from 'polished';
import styled from 'styled-components';
import { ColorTypes, pallette } from '../global';

interface ButtonProps {
  background: ColorTypes;
}

export const Container = styled.button<ButtonProps>`
  background: ${({ background }) => pallette.button[background]};

  padding: 0.7rem 1rem;
  border: 0;
  border-radius: 0.2rem;
  color: ${() => pallette.text.primary};
  font-weight: 500;
  font-size: 1rem;

  transition: background 0.4s;

  &:hover {
    background: ${({ background }) =>
      darken('0.05', pallette.button[background] as string)};
  }
`;
