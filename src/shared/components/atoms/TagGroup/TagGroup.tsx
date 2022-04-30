import React from 'react';
import { HStack, Tag as TagChakra, TagLabel } from '@chakra-ui/react';
import { Tag } from '../Tag/Tag';
import { Typography } from '../Typography';

const TagGroup = ({ data, create }: any) => {
  return (
    <div style={{ display: 'flex' }}>
      {create && (
        <div style={{ cursor: 'pointer', display: 'flex', marginRight: 8 }}>
          <TagChakra
            borderRadius="md"
            variant="outline"
            colorScheme="lightSecondaryObj"
            size="md"
          >
            <TagLabel onClick={() => console.log('isSelected')}>
              <Typography variant="secondary">Criar tag</Typography>
            </TagLabel>
          </TagChakra>
        </div>
      )}
      <HStack>
        {data.map((data: any) => (
          <Tag label={data.label} />
        ))}
      </HStack>
    </div>
  );
};

export default TagGroup;
