import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  label {
    position: absolute;
    bottom: 100%;
    background: var(--background-secondary);
    left: 10px;
    transform: translateY(50%);
    padding: 0 0.2rem;
  }

  input {
    border: 2px solid var(--input-blur);
    border-radius: 0.5rem;
    width: 100%;
    padding: 0.5rem 1rem;
    background: transparent;

    &:focus {
      outline: 0;
    }

    &[type='placeholder'] {
      color: var(--input-blur);
    }
  }
`;
