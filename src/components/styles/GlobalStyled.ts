import { createGlobalStyle } from "styled-components";
import { theme } from './Themes';

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.color.textFont};
        background-color: ${theme.color.primapyBg};
        line-height: 1.4;

        min-width: 360px;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    button {
        border: none;
        background-color: unset ;
    }

    section{
        padding: 150px 0;

        @media ${theme.media.notedook} {
            padding: 120px 0;
    }

        @media ${theme.media.tablet} {
            padding: 100px 0;
    }

    @media ${theme.media.mobile} {
            padding: 80px 0;
    }
    }
`