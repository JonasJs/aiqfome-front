import { themes } from '@/theme/theme';

export function useTheme() {
  /**
   * Hook para acessar o thema no projeto
   * TEMPORARIO: Depois mudar para o next-themes
   */
  const theme = themes.light;

  return { theme };
}
