import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  
  img {
    display:block;
    width: 130px;
    height: 130px;
  }

  @media(max-width: 1080px) {
    width: 90px;
    height: 90px;

    img {
      width: 90px;
      height: 90px;
    } 
  }

  @media(max-width: 720px) {
    width: 65px;
    height: 65px;

    img {
      width: 65px;
      height: 65px;
    } 
  }
  @media(max-width: 480px) {
    width: 45px;
    height: 45px;

  img {
    width: 45px;
    height: 45px;
  } 
}

`