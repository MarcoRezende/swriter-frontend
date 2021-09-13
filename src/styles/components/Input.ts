import styled from 'styled-components';

export const Container = styled.div`
  input {
    border: 0;
    border-bottom: 2px solid;

    &:focus {
      outline: 0;
    }

    &[type='placeholder'] {
      color: var(--input-placeholder-text);
    }
  }
`;
