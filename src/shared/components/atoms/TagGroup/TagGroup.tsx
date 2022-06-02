import React from 'react';
import { HStack, Tag as TagChakra, TagLabel } from '@chakra-ui/react';
import { Tag } from '../Tag/Tag';
import { TagProps } from '../Tag/tag.interfaces';

type TagGroupProps = {
  data: TagProps[];
};

export const TagGroup = ({ data, ...rest }: TagGroupProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <HStack>
        {data.map((data: any) => (
          <Tag {...rest} label={data.label} size="lg" />
        ))}
      </HStack>
    </div>
  );
};
