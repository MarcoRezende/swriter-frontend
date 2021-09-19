import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  bottom: 2rem;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 400px;
    margin: 0 auto;
    list-style: none;
    background: #1c1e23;
    box-shadow: 0 15px 10px -5px rgb(0 0 0 / 50%);
    border-radius: 1rem;
    padding: 0.5rem 1rem;

    a {
      display: flex;
    }

    a + a {
      margin-left: 1rem;
    }
  }
`;
