import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url('/bg.svg') no-repeat;
  background-size: auto;
  background-position: center;

  height: 100%;

  > div {
    background: var(--background-secondary);
    box-shadow: 0 15px 15px -5px rgb(0 0 0 / 25%);
    padding: 2rem;
    border-radius: 1rem;
    max-width: 300px;

    div {
      margin-bottom: 2rem;
      color: var(--text-black);

      h2 {
        font-weight: 800;
      }
    }
  }

  button {
    width: 100%;
  }
`;
