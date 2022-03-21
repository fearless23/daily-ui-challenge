import { Shell } from '@base';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { AppConfigProvider, useAppConfig } from '@context';

interface Props {
  cmp: JSX.Element
}

const MantineLayout = (props: Props) => {
  const appConfig = useAppConfig();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: appConfig.colorScheme as any,
      }}
    >
      <Shell>
        {props.cmp}
      </Shell>
    </MantineProvider>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppConfigProvider>
      <MantineLayout cmp={<Component {...pageProps} />}/>
    </AppConfigProvider>
  );
};

export default MyApp;