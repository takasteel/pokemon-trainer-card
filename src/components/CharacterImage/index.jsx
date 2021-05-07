import { useCharacter } from '../../hooks/useCharacter';
import { Container } from './styles';

export function CharacterImage() {
  const { char, isCharacterLoading, setIsCharacterLoading } = useCharacter();
  return(
    <Container>
      {isCharacterLoading && (
        <p className="loading">Loading...</p>
        )}
        <img 
          src={`assets/${char}@full.webp`} 
          alt="Character" 
          onLoad={() => setIsCharacterLoading(false)}
        />

      
    </Container>
  );
}