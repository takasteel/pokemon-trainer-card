import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #80c5dc;
    --secondary: #dc9780;
    --blue: linear-gradient(135deg, #80c5dc 40%, #0085ba);
    --orange: linear-gradient(135deg, #ff915c 40%, #a00808);
    --brown: linear-gradient(135deg, #c1a582 40%, #523716);
    --green: linear-gradient(135deg, #b5efb5 40%, #0d5f08);
    --purple: linear-gradient(135deg, #b596d8 40%, #1e004e);
    --yellow: linear-gradient(135deg, #eae5a9 40%, #d4c61a);
    --grey: linear-gradient(135deg, #dadada 40%, #1f1f1f);
    --pink: linear-gradient(135deg, #dc809e 40%, #050058);
  }
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }

    html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #FAFAFA;
  }
`
