import styled from 'styled-components';

export const Container = styled.div`
  height: 2rem;
  width: 2rem;
  background: ${props => `var(--${props.theme})`};
  cursor: pointer;
`;
