import { useToggle } from '@mantine/hooks';
import { createContext, useContext } from 'react';

interface AppConfig {
  colorScheme: string,
  toggleTheme: () => void,
}

const data = {
  colorScheme: 'light',
  toggleTheme: () => { }
};

const AppConfigContext = createContext<AppConfig>(data);

export const AppConfigProvider: React.FC = (props) => {
  const [value, toggleTheme] = useToggle('light', ['light', 'dark']);
  const data = {
    colorScheme: value,
    toggleTheme,
  };

  return (
    <AppConfigContext.Provider value={data}>
      {props.children}
    </AppConfigContext.Provider>
  );
};

export const useAppConfig = () => {
  const data = useContext(AppConfigContext);
  return data;
};