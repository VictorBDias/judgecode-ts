import React, { useState } from 'react';
import { Tag as TagChakra, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { TagProps } from './tag.interfaces';
import { Typography } from '../Typography';

const Tag = ({ label, size = 'sm', selected = true, ...rest }: TagProps) => {
  const [isSelected, setIsSelected] = useState(selected);

  const handleTagColor = () => {
    switch (label) {
      case 'Código':
        return 'tagColorObj1';

      case 'Múltipla escolha':
        return 'tagColorObj2';

      case 'Texto':
        return 'tagColorObj3';

      case 'Ordenar':
        return 'tagColorObj4';

      default:
        return 'lightSecondaryObj';
    }
  };
  return (
    <div style={{ display: 'flex' }} {...rest}>
      <TagChakra
        borderRadius="md"
        variant={!isSelected ? 'outline' : 'solid'}
        colorScheme={handleTagColor()}
        size={size}
      >
        <TagLabel onClick={() => setIsSelected(!isSelected)}>
          <Typography variant={!isSelected ? 'regular' : 'tag'}>
            {label}
          </Typography>
        </TagLabel>
      </TagChakra>
    </div>
  );
};

export { Tag };
