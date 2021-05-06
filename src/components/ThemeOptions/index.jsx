import { useTheme } from '../../hook/useTheme';
import { Container } from './styles';

export function ThemeOptions({ theme }) {
  const { setCurrentTheme } = useTheme();
  return(
    <Container theme={theme} onClick={() => setCurrentTheme(theme)}>
    </Container>
  );
}