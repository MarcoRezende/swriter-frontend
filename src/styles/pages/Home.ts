import { BsArrowClockwise } from 'react-icons/bs';
import styled, { css } from 'styled-components';

interface ButtonProps {
  $rotate?: boolean;
}

export const Container = styled.main`
  height: 100vh;
  max-width: 900px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  font-family: Libre Baskerville;
  color: #303030;

  > div {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .sentence {
      font-style: italic;
      font-size: 1.4rem;
    }

    ul {
      list-style: none;

      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      margin: 0.5rem 0 1rem;

      li {
        border: 1px solid #303030;
        border-radius: 1rem;
        padding: 0.5rem 1rem;

        font-size: 0.9rem;
      }
    }

    div:first-of-type {
      margin-top: 1rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p:first-child {
        margin-bottom: 0.3rem;
      }

      p:last-child {
        margin: 1.5rem 0;
        font-size: 1.1rem;
      }

      p:nth-child(-2n + 2) {
        &::after {
          content: '';
          border-bottom: 1px solid #303030;
          width: 50%;

          display: block;
          margin: 0.4rem auto 0;
        }
      }
    }
  }
`;

export const Button = styled(BsArrowClockwise)<ButtonProps>`
  margin: auto 0 2rem;
  background: none;
  border: 0;

  cursor: pointer;

  transition: transform 0.4s;

  ${({ $rotate }) => {
    return (
      $rotate &&
      css`
        transform: rotate(360deg);
      `
    );
  }}
`;
