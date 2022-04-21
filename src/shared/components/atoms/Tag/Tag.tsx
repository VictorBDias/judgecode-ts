import React, { useState } from 'react';
import { Tag as TagChakra, TagLabel } from '@chakra-ui/react';

// import { Container } from './styles';

const Tag = ({ label }: any) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div style={{ cursor: 'pointer' }}>
      <TagChakra
        borderRadius="full"
        variant={isSelected ? 'solid' : 'outline'}
        colorScheme="telegram"
      >
        <TagLabel onClick={() => setIsSelected(!isSelected)}>label</TagLabel>
      </TagChakra>
    </div>
  );
};

export { Tag };
