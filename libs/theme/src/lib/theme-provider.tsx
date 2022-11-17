import {
  ReactElement,
  ReactNode,
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from 'react';

export interface ThemeService {
  theme: Theme;
  isDark: boolean;
  changeTheme: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<ThemeService | undefined>(undefined);

export const enum Theme {
  light = 'light',
  dark = 'dark',
}

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? Theme.dark
  : Theme.light;

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [theme, setTheme] = useState<Theme>(systemTheme);

  const handleThemeChange = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
  }, []);

  // Change body class name on theme change
  useEffect(() => {
    if (theme === Theme.dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const themeService = useMemo(() => {
    return {
      theme,
      isDark: theme === Theme.dark,
      changeTheme: handleThemeChange,
    };
  }, [handleThemeChange, theme]);

  return (
    <ThemeContext.Provider value={themeService}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeService {
  const themeService = useContext(ThemeContext);

  if (themeService === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return themeService;
}
