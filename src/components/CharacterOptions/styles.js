import styled from 'styled-components';

export const Container = styled.div`
  .MuiTabs-flexContainer {
    max-height: 4rem;
  }
  .MuiAppBar-root {
    width: 800px;    
  }
  .MuiTab-root {
    max-height: 100%;
    min-width: 128px;
  }

  @media(max-width: 1080px) {
    .MuiAppBar-root {
      width: 600px;
    }
    .MuiTab-root {
      min-width: 96px;
    }
  }
  @media(max-width: 720px) {
    .MuiTabs-flexContainer {
      max-height: 3rem;
    }
    .MuiAppBar-root {
      width: 420px;
    }
    .MuiTab-root {
      min-width: 64px;
      & img {
        width: 32px;
      }
    }
  }
  @media(max-width: 480px) {
    .MuiAppBar-root {
      width: 273px;
    }
  }

`