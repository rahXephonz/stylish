import { createGlobalStyle } from "styled-components";
import OpenSauceBold from "fonts/OpenSauce-Bold.ttf";
import OpenSauceMedium from "fonts/OpenSauce-Medium.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sauce';
    src: local('Open Sauce'), local('Open Sauce'),
    url(${OpenSauceMedium}) format('ttf'),
    url(${OpenSauceMedium}) format('ttf');
    font-style: normal;
  }

   @font-face {
    font-family: 'Open Sauce';
    src: local('Open Sauce'), local('Open Sauce'),
    url(${OpenSauceBold}) format('ttf'),
    url(${OpenSauceBold}) format('ttf');
    font-style: normal;
  }

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
