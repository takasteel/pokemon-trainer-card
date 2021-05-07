import styled from 'styled-components';
export const Container = styled.div`
  grid-area: trainer-image;
  display: flex;
  justify-content: center;
  align-items:center;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  position: relative;
  .loading {
    position: absolute;
    font-size: 1rem;
    color: white;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
  img {
    display: block;
    pointer-events: none;

    @media(max-width: 1080px) {
      max-height: 300px;
      max-width: 170px;
    }

    @media(max-width: 720px) {
      max-width: 130px;
      max-height: 220px;
    }

    @media(max-width: 480px) {
      max-width: 80px;
      max-height: 150px;
    }
  }
  
`;
