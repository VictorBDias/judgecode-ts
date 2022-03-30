import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  // Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Card, FormInput, Button } from '../../../../shared/components/atoms';
import { Icon } from '../../../../shared/components/atoms/Icon';

type SignInForm = {
  email: string;
  password: string;
};
const SignIn = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInForm>();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const onSubmit = (data: any) => console.log(data);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="900"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar bg="secondary" />
      <Heading color="secondary" style={{ marginBottom: -130 }}>
        Bem vindo camarada
      </Heading>
      <Card width={400} height={260}>
        <form id="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            variant="filled"
            style={{ marginBottom: 16 }}
            {...register('email', { required: true })}
            placeholder="Insira seu email"
            label="Email"
            icon="email"
          />
          <FormInput
            variant="filled"
            style={{ marginBottom: 16 }}
            {...register('password', { required: true })}
            placeholder="Insira sua senha"
            label="Senha"
            icon="lock"
          />
          <Button
            type="submit"
            id="sign-in-form"
            style={{ width: '300%', maxWidth: 380 }}
          >
            Fazer Login
          </Button>
        </form>
      </Card>
    </Flex>
  );
};

export { SignIn };
