// https://www.youtube.com/watch?v=xyr3Vj83lJI

import type { NextPage } from 'next';
import { Text, Button, createStyles, Group, Divider, TextInput, PasswordInput } from '@mantine/core';
import { GiIronCross } from 'react-icons/gi';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { IoLogoFacebook as FacebookIcon } from 'react-icons/io';
import Image from 'next/image';

const useStyles = createStyles((theme, _params) => {
  const radius = 36;
  const accentColor = '#B0D8DA'
  return {
    container: {
      background: accentColor,
      display: 'flex',
      minHeight: '650px',
      position: 'relative',
    },
    imageUI: {
      position: 'absolute',
      // border:'2px solid black',
      width: '33%',
      height:'300px',
      bottom: '12%',
      left: '2%'
    },
    leftUI: {
      flex: 1,
      paddingTop: '20px',
      paddingLeft: '28px',
    },
    leftText: {
      fontSize: '24px'
    },
    loginContainer: {
      flex: 3,
      background: theme.white,
      color: theme.black,
      borderRadius: `${radius}px 0 0 ${radius}px`
    },
    languageBox: {
      paddingTop: '20px',
      paddingRight: '28px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      color: theme.colors.gray[6]
    },
    loginBox: {
      maxWidth: '391px',
      margin: '0 auto',
      marginTop: '2rem',
    },
    loginBoxTitle: {
      color: theme.black,
      fontWeight: 'bolder',
      fontSize: '24px',
      textAlign: 'center',
    },
    signupButton: {
      color: theme.colors.gray[7],
      fontWeight: 'lighter',
      border: `1px solid ${theme.colors.gray[3]}`
    },
    divider: {
      width: '70px',
      margin: '0 auto',
    },
    inputsWrapper: {
      width: "100%"
    },
    createAccountButton: {
      background: accentColor,
      width: '100%',
    }
  };
});

const LoginBox: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Group className={classes.loginBox} direction="column" spacing="md" position='center'>
      <Text className={classes.loginBoxTitle}>Create Account</Text>
      <Group position="center">
        <Button leftIcon={<GoogleIcon />} variant="white" className={classes.signupButton}>Sign up with Google</Button>
        <Button leftIcon={<FacebookIcon />} variant="white" className={classes.signupButton}>Sign up with Facebook</Button>
      </Group>
      <div className={classes.divider}>
        <Divider my="xs" label="OR" labelPosition="center" />
      </div>
      <div className={classes.inputsWrapper}>
        <TextInput placeholder="Full name" />
        <TextInput mt="sm" placeholder="Email Address" />
        <PasswordInput mt="sm" placeholder="Passwordd" />
      </div>
      <Button className={classes.createAccountButton}>Create Account</Button>
    </Group>
  );
};

const LoginUI: React.FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.loginContainer}>
      <div className={classes.languageBox}>
        <Text>English</Text>
        <AiOutlineCaretDown size={32} />
      </div>
      <LoginBox />
    </div>
  );
};

const LeftUI: React.FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.leftUI}>
      <GiIronCross size={32} color="white" />
      <Text color="white" mt={50} className={classes.leftText}>Find 3D Objects, Mockups, and Illustrations here.</Text>
    </div>
  );
};

const ImageUI: React.FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.imageUI}>
      <Image src="/images/day1/3d.jpeg" alt="3D" layout='fill' />
    </div>
  );
};

const DayOne: NextPage = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <LeftUI />
      <LoginUI />
      <ImageUI />
    </div>
  );
};

export default DayOne;