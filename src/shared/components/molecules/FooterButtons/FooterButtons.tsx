import React from 'react';
import { Box } from '@chakra-ui/react';

// CUSTOM IMPORTS
import { FooterButtonProps } from './footerButtons.interface';
import { Button, Typography } from '../../atoms';

function FooterButtons({
  onCancel,
  isDisable,
  formId,
  isLoading,
  disableCancelButton,
  disableConfirmButton,
  type,
  saveButton,
  cancelButton,
  confirmButtonName,
  cancelButtonName,
  confirmSecurity,
  ...rest
}: FooterButtonProps) {
  return (
    <Box
      as="footer"
      // bg="primary"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 16,
        position: 'fixed',
        bottom: 0,
        right: 0,
      }}
      {...rest}
    >
      {!disableCancelButton && (
      <Button
        colorScheme="teal"
        color="null"
        size="lg"
        variant="ghost"
        onClick={() => onCancel()}
      >
        {cancelButton || (
        <Typography variant="error">Cancelar</Typography>
        )}
      </Button>
      )}

      {!disableConfirmButton && (
        <Button
          size="lg"
          variant="regular"
          type={type}
          form={formId}
          style={{ marginLeft: 8 }}
        >
          {confirmButtonName || (
            <Typography>Salvar</Typography>
          )}
        </Button>
      )}
    </Box>
  );
}

export { FooterButtons };
