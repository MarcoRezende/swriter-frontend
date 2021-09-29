import styled, { css } from 'styled-components';

interface InputProps {
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<InputProps>`
  position: relative;

  textarea {
    resize: vertical;
    border: 2px solid var(--input-blur);
    border-radius: 0.5rem;
    width: 100%;
    padding: 0.7rem 1rem;
    background: transparent;

    transition: border-color 0.2s, color 0.2s;

    ${({ isFilled, isFocused }) =>
      (isFilled || isFocused) &&
      css`
        color: var(--input-focused);
        border-color: var(--input-focused);

        &,
        & + label,
        ::placeholder {
          color: var(--input-focused);
        }
      `}

    &:focus {
      outline: 0;
      border-color: var(--input-focused);

      &,
      & + label,
      ::placeholder {
        color: var(--input-focused);
      }
    }

    &[type='placeholder'] {
      color: var(--input-blur);
    }
  }

  label {
    position: absolute;
    bottom: 100%;
    background: var(--background-secondary);
    left: 10px;
    transform: translateY(50%);
    padding: 0 0.2rem;

    color: var(--input-blur);
    font-weight: 700;
    font-size: 0.9rem;

    transition: color 0.2s;
  }
`;
