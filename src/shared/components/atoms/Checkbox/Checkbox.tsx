import React from 'react';
import { Checkbox } from '@chakra-ui/react';

import { CheckBoxProps } from './checkbox.interfaces';
import { Typography } from '../Typography';

const CheckBox = ({
  label,
  isChecked,
  isDisabled = false,
  defaultChecked = false,
  onChange,
  ...rest
}: CheckBoxProps) => (
  <Checkbox
    {...rest}
    onChange={onChange}
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
