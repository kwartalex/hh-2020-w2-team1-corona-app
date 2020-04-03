import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

#root {
    display: grid;
    grid-template-rows: 60px auto 48px;
    height: 100vh;
}

  body {
    margin: 0;
    font-family: sans-serif;
  }

  :root {
    --primary: #f8b400;
    --secondary: #004445;
    --tertiary: #2c786c;
    --quaternary: #faf5e4;
  }
`
