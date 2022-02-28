import React from 'react';
import { Box } from '@chakra-ui/react';

//* CUSTOM IMPORTS
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
    <Box display="flex" alignItems="center" justifyContent="flex-end" {...rest}>
      {!disableCancelButton && (
        <Button
          variant="outline"
          onClick={() => onCancel()}
        >
          {cancelButton || (
            <Typography>Cancelar</Typography>
          )}
        </Button>
      )}

      {!disableConfirmButton && (
        <Button
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
