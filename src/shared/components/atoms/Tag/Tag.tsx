import React, { useState } from 'react';
import { Tag as TagChakra, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { TagProps } from './tag.interfaces';
import { Typography } from '../Typography';

const Tag = ({ label, tagVariant, ...rest }: TagProps) => {
  const [isSelected, setIsSelected] = useState(false);

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
        variant={tagVariant || 'solid'}
        colorScheme={handleTagColor()}
        size="sm"
      >
        <TagLabel onClick={() => setIsSelected(!isSelected)}>
          <Typography variant={tagVariant !== 'outline' ? 'tag' : 'secondary'}>
            {label}
          </Typography>
        </TagLabel>
      </TagChakra>
    </div>
  );
};

export { Tag };
