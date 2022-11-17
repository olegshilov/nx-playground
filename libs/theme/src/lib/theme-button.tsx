import { useCallback } from 'react';
import { Theme, useTheme } from './theme-provider';

export function ThemeButton() {
  const { theme, changeTheme } = useTheme();

  const handleThemeChange = useCallback(() => {
    const newTheme = theme === Theme.dark ? Theme.light : Theme.dark;
    changeTheme(newTheme);
  }, [changeTheme, theme]);

  return (
    <button type="button" onClick={handleThemeChange}>
      Change theme
    </button>
  );
}
