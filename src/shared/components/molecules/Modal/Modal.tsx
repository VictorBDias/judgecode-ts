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
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';
import { ModalProps } from './modal.interfaces';

const Modal = ({
  children,
  title,
  show,
  onClose,
  size = 'md',
  onSubmit,
  disableFooter = false,
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
              onClick={onSubmit}
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
