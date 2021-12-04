import { createGlobalStyle } from 'styled-components';

export type ColorTypes = 'primary' | 'secondary';

const commonColors = {
  primary: '#201B62',
  secondary: '#575bcf',
};

export const pallette: {
  [key: string]: {
    [key in ColorTypes]?: string;
  };
} = {
  text: {
    primary: '#DFDFDF',
  },
  button: commonColors,
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --input-blur: #817f7f;
    --input-focused: ${commonColors.primary};
    --text-black: #353232;
    --text-white: #fff;
    --background: #F2F2F2;
    --background-secondary: #eeebeb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #__next {
    height: 100vh;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 85.5%;
    }

    body {
      background: var(--background);
      --webkit-font-smoothing: antialiased;
    }

    body, button, input, textarea {
      font-family: Montserrat, sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }

    button {
      cursor: pointer;

      &:hover {
        outline: 0;
      }
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
