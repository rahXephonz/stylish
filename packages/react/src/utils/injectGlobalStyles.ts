import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  html,
    body,
    #root {
      padding: 0;
      margin: 0;
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
      background-color: ${p => p.theme.colors["bg-secondary"]};
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
