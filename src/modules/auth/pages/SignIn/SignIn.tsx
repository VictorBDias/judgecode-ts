import React, { useState } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Card, FormInput, Button, Typography } from 'shared/components/atoms';
import { useAuth } from 'modules/auth/contexts';

type SignInForm = {
  uid: string;
  password: string;
};
const SignIn = () => {
  const { handleSignIn } = useAuth();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInForm>();
  const navigate = useNavigate();

  const onSubmit = (data: any) => handleSignIn(data);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="900"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color="secondary" style={{ marginBottom: -130 }}>
        Conecte-se
      </Heading>
      <Card width={400} height={300}>
        <form id="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            variant="filled"
            style={{ marginBottom: 16 }}
            {...register('uid', { required: true })}
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
            type="password"
          />
          <Button
            type="submit"
            id="sign-in-form"
            style={{ width: '300%', maxWidth: 380 }}
          >
            Fazer Login
          </Button>

          <Button
            variant="outline"
            style={{ width: '300%', maxWidth: 380, marginTop: 16 }}
            onClick={() => navigate('/signUp')}
          >
            Não possui cadastro?
          </Button>
        </form>
      </Card>
    </Flex>
  );
};

export { SignIn };
