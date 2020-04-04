import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

#root {
    display: grid;
    grid-template-rows: 64px auto 48px;
    height: 100vh;
}

  body {
    margin: 0;
    font-family: sans-serif;
  }

  p {
    line-height: 150%;
    font-weight: 300;
  }

  :root {
    --primary: #004445;
    --secondary: #2c786c;
    --tertiary: #faf5e4;
  }
`
