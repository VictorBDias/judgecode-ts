import React from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

// CUSTOM IMPORTS
import { useForm } from 'react-hook-form';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';
import { ModalProps } from './modal.interfaces';

const Modal = ({
  children,
  title,
  show,
  onClose,
  size = 'md',
  disableFooter = true,
}: ModalProps) => {
  return (
    <ChakraModal
      onClose={onClose}
      isOpen={show}
      scrollBehavior="inside"
      size={size}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {!disableFooter && (
          <ModalFooter>
            <Button
              size="sm"
              variant="outline"
              color="secondaryObj"
              onClick={onClose}
            >
              <Typography variant="secondary">Cancelar</Typography>
            </Button>
            <Button
              formId="code-form"
              id="code-form"
              type="submit"
              color="secondaryObj"
              size="sm"
              variant="solid"
              style={{ marginLeft: 8 }}
            >
              <Typography variant="whiteSubTitle">Salvar</Typography>
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </ChakraModal>
  );
};

export { Modal };
