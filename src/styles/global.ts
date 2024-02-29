import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url('https://fonts.googleapis.com/css2?family=Poppins') format('truetype');
  }
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body {
    width: 100%;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: 'Poppins', sans-serif;
    background: ${(props) => props.theme.colors.Branco};

    &::-webkit-scrollbar {
      width: 0;
    }
  } 

`
