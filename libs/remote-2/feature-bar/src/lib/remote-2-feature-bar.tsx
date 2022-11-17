import { Theme, ThemeButton, useTheme } from '@nx-playground/theme';
import { Heading } from '@nx-playground/ui';

export function Remote2FeatureBar() {
  const { theme } = useTheme();

  return (
    <div>
      <Heading level={3}>remote-2-feature-bar component</Heading>

      <div style={{ margin: '1rem 0', fontSize: '2rem' }}>
        current theme:{' '}
        {theme === Theme.dark ? <span>🌙</span> : <span>☀️</span>}
      </div>

      <ThemeButton />
    </div>
  );
}
