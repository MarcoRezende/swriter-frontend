import { BsArrowClockwise } from 'react-icons/bs';
import { BiCopy } from 'react-icons/bi';
import styled, { css, keyframes } from 'styled-components';
interface ButtonProps {
  $rotate?: boolean;
  $push?: boolean;
}

const pushAnimation = keyframes`
  50% {
    transform: scale(0.8);
  }
`;

export const Container = styled.main`
  height: 100vh;
  max-width: 900px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  font-family: Libre Baskerville;
  color: var(--gray-100);

  div.content {
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
        border: 1px solid var(--gray-400);
        border-radius: 1rem;
        padding: 0.5rem 1rem;
        position: relative;

        font-size: 0.9rem;

        transition: color 0.2s, background 0.2s, transform 0.2s;

        &:hover {
          background: var(--gray-400);
          color: var(--gray-100);
          transform: translateY(-3px);
        }
      }
    }
  }

  div.buttons {
    gap: 0.5rem;
    display: flex;
    justify-content: center;

    position: relative;
    width: 100%;
    font-family: Poppins;

    > svg {
      margin: auto 0 2rem;
      background: none;
      border: 0;
      color: var(--gray-100);

      cursor: pointer;

      transition: transform 0.4s;
    }

    form,
    & > span {
      position: absolute;
      bottom: calc(0% + 5rem);

      opacity: 0;
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
      border-bottom: 1px solid var(--text-black);
      width: 50%;

      display: block;
      margin: 0.4rem auto 0;
    }
  }
`;

export const Button = styled(BsArrowClockwise)<ButtonProps>`
  ${({ $rotate }) =>
    $rotate &&
    css`
      transform: rotate(360deg) !important;
    `}
`;

export const CopyToClipboard = styled(BiCopy)<ButtonProps>`
  ${({ $push }) =>
    $push &&
    css`
      animation: ${pushAnimation} 0.3s linear 1;
    `}
`;
