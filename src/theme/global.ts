import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        transition: ${({ theme }) => theme.transition};
    }
    ${normalize}
    body {
        margin: 0;
        padding: 0;    
        background-color: ${({ theme }) => theme.backgroundColor};
    }
    html, body {
        display: flex;
        min-height: 100vh;
        width: 100%;
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.color};
        font-family: Ubuntu, sans-serif;
    }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    ul{
        padding:0;
    }
`;

export default GlobalStyle;
