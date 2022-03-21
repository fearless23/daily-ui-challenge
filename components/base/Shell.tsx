import { useState } from 'react';
import { Navbar } from './Navbar';
import {
  AppShell,
  Burger,
  createStyles,
  Header,
  MediaQuery,
  Navbar as MantineNavbar,
  Text,
  useMantineTheme
} from '@mantine/core';

const useStyles = createStyles((theme) => {
  return {
    navbar: {
      backgroundColor: theme.colors[theme.primaryColor][6],
    },

    header: {
      backgroundColor: theme.colors[theme.primaryColor][6],
      color: theme.white,
    },
  };
});

export const Shell: React.FC = (props) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="xl"
      navbar={
        <MantineNavbar
          className={classes.navbar}
          p="md"
          hiddenBreakpoint="xl"
          hidden={!opened}
          width={{ sm: 240 }}
        >
          <Navbar setHidden={(i) => setOpened(!i)} />
        </MantineNavbar>
      }
      header={
        <Header height={70} p="md" className={classes.header}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Burger
              opened={false}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.white}
              mr="xl"
            />
            <Text>Daily UI Challenge</Text>
          </div>
        </Header>
      }
    >
      <div>
        {props.children}
      </div>
    </AppShell>
  );
};