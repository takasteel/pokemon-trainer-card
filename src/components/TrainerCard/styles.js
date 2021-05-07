import styled from 'styled-components'
export const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  background: transparent;
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 500px;
  background: ${props => `var(--${props.theme})`};
  border-radius: 25px;
  
  .inner-container {
    display: grid;
    grid-template:
      "trainer-info trainer-image" 1fr
      "pokemon-list trainer-image" 2fr
      /     2fr           1fr;
    justify-content: center;
    
    width: 95%;
    height: 90%;

    border: 3px solid rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    
    .trainer-info-container {
      grid-area: trainer-info;
      display: flex;
      flex-direction: column;

      h3 {
          font-size: 1rem;
          color: black;
          margin-left: 0px;
        }

      input {
        height: 50%;
        background: rgba(255, 255, 255, 0.5);
        border: 0;
        border-radius: 8px;
        outline: none;
        padding: 0 10px 0 10px;
        font-size: 1rem;
        font-weight: 500;
      }

      hr {
        border: 1px solid rgba(255, 255, 255, 0.6);
        margin-top: 0.25rem;
      }

      .trainer-info-name {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 50%;
        margin: 0.5rem 0.5rem 0 0.5rem;
      }

      .trainer-info-code {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 50%;
        margin: 0.5rem 0.5rem 0 0.5rem;
      }
      
    }

  }
  
  @media(max-width: 1080px) {
    width: 600px;
    height: 375px;
    border-radius: 15px;
    .inner-container {
      border: 2px solid rgba(255, 255, 255, 0.6);
      border-radius: 8px;

      .trainer-info-container {
        h3 {
          font-size: 1rem;
        }
        input {
          padding: 0 9px 0 9px;;
          font-size: 0.9rem;
        }
      }
    }
  }

  @media(max-width: 720px) {
    width: 420px;
    height: 262px;
    border-radius: 15px;
    /* width: 210px;
    height: 150px; */
    .inner-container {
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 7px;
      .trainer-info-container {
        h3 {
          font-size: 0.825rem;
        }
        input {
          padding: 0 7px 0 7px;
          font-size: 0.825rem;
          border-radius: 5px;
        }
        hr {
          border: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.6);
        }
        .trainer-info-name {
          margin: 0.35rem 0.5rem 0 0.5rem;
        }

        .trainer-info-code {
          margin: 0.35rem 0.5rem 0 0.5rem;
        }
      }
    }
  }


  @media(max-width: 480px) {
    width: 273px;
    height: 195px;
    border-radius: 10px;
    .inner-container {
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 6px;

      .trainer-info-container {
        h3 {
          font-size: 0.625rem;
        }
        input {
          padding: 0 5px 0 5px;
          font-size: 0.625rem;
          border-radius: 3px;
        }
        hr {
          border: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.6);
        }
        .trainer-info-name {
          margin: 0.25rem 0.5rem 0 0.5rem;
        }

        .trainer-info-code {
          margin: 0.25rem 0.5rem 0 0.5rem;
        }
      }
    }
  }
`

export const TeamContainer = styled.div`
  grid-area: pokemon-list;
  display: grid;
  gap: 0.5rem;
  grid-template:
    "slot-1 slot-2 slot-3" 1fr
    "slot-4 slot-5 slot-6" 1fr
    / 1fr     1fr    1fr;
  align-content: center;
  align-items: center;
  justify-items: center; 

  div {
    height: 90px;
    width: 90px;
    background: rgba(255, 255, 255, 0.4);
    transform: rotate(45deg);
    transition: filter 0.2s;
    cursor: pointer;

  &:hover, :focus {
    filter: brightness(0.7);
  }

    img {
      transform: rotate(-45deg);
    }
  }

  @media(max-width: 1080px) {
    gap: 0.25rem;

    div {
      height: 60px;
      width: 60px;
    }
  }
  @media(max-width: 720px) {
    gap: 0.125rem;

    div {
      height: 35px;
      width: 35px;
    }
  }

  @media(max-width: 480px) {
    gap: 0.125rem;

    div {
      height: 25px;
      width: 25px;
    }
  }
`
export const ThemeContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  div {
    & + div {
      margin-left: 1rem;
      @media(max-width: 720px) {
        margin-left: 0.5rem;
      }
    }
  }
`