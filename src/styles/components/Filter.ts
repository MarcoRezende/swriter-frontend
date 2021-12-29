import styled from 'styled-components';
import { Select as OuterSelect } from '../../components/Select';

import { motion } from 'framer-motion';

export const Container = styled(motion.form)`
  font-family: 'Poppins' !important;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20rem;

  padding: 2.5rem 2rem 1.5rem;
  background: ;
  background: linear-gradient(
    180deg,
    var(--gray-500) 0%,
    rgba(61, 63, 67, 0.83) 100%
  );
  border-radius: 10px;

  position: relative;

  > svg {
    position: absolute;
    right: 20px;
    top: 20px;
    color: var(--gray-100);
    cursor: pointer;
  }

  fieldset {
    margin-bottom: 1rem;
    width: 100%;

    > span {
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--gray-100);
      margin-bottom: 5px;
      display: block;
    }

    label {
      display: flex;

      background: var(--gray-700);
      height: 2.5rem;
      border-radius: 10px;
      overflow: hidden;
      color: var(--gray-200);

      input {
        color: var(--gray-100);
        padding: 0.5rem 1rem;
        flex: 1;

        &:focus {
          color: var(--gray-100);
          outline: 0;
        }

        &::placeholder {
          font-size: 1rem;
          font-weight: 500;
        }
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        background: var(--gray-400);
        width: 2rem;
        height: 100%;

        svg {
          color: var(--gray-300);
        }
      }
    }
  }

  button {
    width: 100%;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
  }
`;

export const Select = styled(OuterSelect)`
  .react-select-container {
    background: #000;
  }
`;
