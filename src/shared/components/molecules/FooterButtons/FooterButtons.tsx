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
          size="lg"
          variant="outline"
          color="secondaryObj"
          onClick={() => onCancel()}
        >
          {cancelButton || (
            <Typography variant="secondary">Cancelar</Typography>
          )}
        </Button>
      )}

      {!disableConfirmButton && (
        <Button
          color="secondaryObj"
          size="lg"
          variant="solid"
          type={type}
          form={formId}
          style={{ marginLeft: 8 }}
        >
          {confirmButtonName || (
            <Typography variant="whiteSubTitle">Salvar</Typography>
          )}
        </Button>
      )}
    </Box>
  );
}

export { FooterButtons };
