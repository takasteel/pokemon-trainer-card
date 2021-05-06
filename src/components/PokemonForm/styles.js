import styled from 'styled-components';

export const Container = styled.div`
  form {
    max-height: 56px;
    width: 320px;
    display: flex;
    align-items: center;
    & button {
      height: 100%;
    }
  }

  .description {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;
