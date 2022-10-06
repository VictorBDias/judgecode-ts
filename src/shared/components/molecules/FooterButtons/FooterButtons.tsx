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
          <Typography variant="secondary">
            {cancelButton || 'Cancelar'}
          </Typography>
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
          <Typography variant="whiteSubTitle">
            {confirmButtonName || 'Salvar'}
          </Typography>
        </Button>
      )}
    </Box>
  );
}

export { FooterButtons };
