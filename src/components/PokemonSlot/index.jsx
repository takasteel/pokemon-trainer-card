import { Container } from './styles';

export function PokemonSlot({ name, spriteUrl, onClick }) {
  return(
    <Container onClick={onClick}>
      <img src={spriteUrl} alt={name}/>
    </Container>
  );
}