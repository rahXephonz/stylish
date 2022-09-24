import { createGlobalStyle } from "styled-components";
import { Theme } from "theme";

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  html,
    body,
    #root {
      width: 100%;
      height: 100%;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }
    body {
      font-family: ${p => p.theme.fonts.system};
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    img {
      display: block;
      max-width: 100%;
    }
    .noscroll {
      overflow: hidden;
    }
    .noselect {
      user-select: none;
    }

    /* another settings style if required */
  `;

export default GlobalStyles;
