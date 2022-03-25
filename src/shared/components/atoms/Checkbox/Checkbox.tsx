import React, { Children } from 'react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';

// CUSTOM IMPORTS
import { CheckBoxProps } from './checkbox.interfaces';
import { Typography } from '../Typography';

const CheckBox = ({
  label,
  isChecked,
  isDisabled = false,
  defaultChecked = false,
  ...rest
}: CheckBoxProps) => (
  <Checkbox
    {...rest}
    isChecked={isChecked}
    isDisabled={isDisabled}
    defaultChecked={defaultChecked}
    colorScheme="secondaryObj"
    size="md"
  >
    <Typography>{label}</Typography>
  </Checkbox>
);

export { CheckBox };
