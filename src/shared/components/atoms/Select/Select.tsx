import React from 'react';
import { Select as SelectChakra } from '@chakra-ui/react';
import { SelectProps } from './select.interfaces';

const Select = ({ placeholder, options, ...rest }: SelectProps) => {
  return (
    <div style={{ width: 240 }}>
      <SelectChakra placeholder={placeholder} {...rest}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </SelectChakra>
    </div>
  );
};

export { Select };
