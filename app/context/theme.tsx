import { FC, ReactNode, useContext, createContext, useState } from "react";

interface ThemeContextProps {
  theme: boolean;
  setTheme: (theme: boolean) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: false,
  setTheme: () => undefined,
});

const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useThemeContext };
