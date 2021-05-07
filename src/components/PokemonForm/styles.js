import styled from 'styled-components';

export const Container = styled.div`
  & h1 {
    text-align: center;
  }
  margin-top: 2rem;
  form {
    height: 56px;
    max-width: calc(100vw - 4rem);
    display: flex;
    align-items: center;
    & .MuiAutocomplete-root {
      width: 100%;
    }
    & .MuiButton-root {
      height: 100%;
      margin-left: 0.5rem;
    }
  }
  .description {
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;
