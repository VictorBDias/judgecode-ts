import React, { useState } from 'react';
import {
  Tag as TagChakra,
  TagCloseButton,
  TagLabel,
  TagRightIcon,
} from '@chakra-ui/react';
import { TagProps } from './tag.interfaces';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

const Tag = ({
  label,
  iconName,
  tagVariant,
  create = false,
  onClose,
}: TagProps) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div style={{ cursor: 'pointer', display: 'flex' }}>
      <TagChakra
        borderRadius="md"
        variant={tagVariant || 'solid'}
        colorScheme="lightSecondaryObj"
        size="lg"
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
