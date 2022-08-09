import React, { useState } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'modules/auth/contexts';
import { Card, FormInput, Button } from '../../../../shared/components/atoms';

type SignUpForm = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};
const SignUp = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpForm>();
  const { handleSignUp } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data: any) => handleSignUp({ data });

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
        Registre-se
      </Heading>
      <Card width={400} height={480}>
        <form id="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            variant="filled"
            style={{ marginBottom: 16 }}
            {...register('name', { required: true })}
            placeholder="Insira seu nome completo"
            label="Nome"
            icon="person"
          />
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
            type="password"
          />
          <FormInput
            variant="filled"
            style={{ marginBottom: 16 }}
            {...register('password_confirmation', { required: true })}
            placeholder="Repita sua senha"
            label="Confirmar Senha"
            icon="lock"
            type="password"
          />
          <Button
            type="submit"
            id="sign-in-form"
            style={{ width: '300%', maxWidth: 380 }}
          >
            Realizar cadastro
          </Button>

          <Button
            variant="outline"
            style={{ width: '300%', maxWidth: 380, marginTop: 16 }}
            onClick={() => navigate('/signIn')}
          >
            Já possui cadastro?
          </Button>
        </form>
      </Card>
    </Flex>
  );
};

export { SignUp };
