import React from 'react';
import { useForm } from 'react-hook-form';

// import { SideNavigation } from '@shared/components/templates';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';

import { Teste } from './interfaces/formList.interface';

function FormList() {
  // hooks
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Teste>();

  // functions
  function onSubmit(data:any) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="name">label</FormLabel>
        <Input
          id="name"
          placeholder="placeholder"
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
    // <FormControl>
    //   {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
    //   <Input
    //     name={name}
    //     placeholder={placeholder}
    //     focusBorderColor="secondary"
    //     bgColor="gray.200"
    //     variant="filled"
    //     isRequired
    //     {...rest}
    //   />
    // </FormControl>

  );
}

export { FormList };
