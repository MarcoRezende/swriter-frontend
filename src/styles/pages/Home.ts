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
      font-size: 1.5rem;
      text-align: center;
    }

    ul {
      list-style: none;

      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;

      margin: 0.7rem 0 1rem;

      li {
        border: 1px solid #303030;
        border-radius: 1rem;
        padding: 0.5rem 1rem;
        position: relative;

        font-size: 0.9rem;

        transition: color 0.2s, background 0.2s, transform 0.2s;

        &:hover {
          background: #303030;
          color: var(--text-white);
          transform: translateY(-3px);
        }
      }
    }
  }
`;

export const HintDetails = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p.author {
    margin-bottom: 0.3rem;
  }

  p.times-drawn {
    margin: 1.5rem 0;
    font-size: 1.1rem;
  }

  p.book {
    &::after {
      content: '';
      border-bottom: 1px solid #303030;
      width: 50%;

      display: block;
      margin: 0.4rem auto 0;
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
