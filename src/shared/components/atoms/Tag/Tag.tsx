import React, { useState } from 'react';
import { Tag as TagChakra, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { TagProps } from './tag.interfaces';
import { Typography } from '../Typography';

const Tag = ({ label, tagVariant, onClose }: TagProps) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div style={{ display: 'flex' }}>
      <TagChakra
        borderRadius="md"
        variant={tagVariant || 'solid'}
        colorScheme="lightSecondaryObj"
        size="md"
      >
        <TagLabel onClick={() => setIsSelected(!isSelected)}>
          <Typography variant={tagVariant !== 'outline' ? 'tag' : 'secondary'}>
            {label}
          </Typography>
        </TagLabel>
        <TagCloseButton onClick={onClose} />
      </TagChakra>
    </div>
  );
};

export { Tag };
