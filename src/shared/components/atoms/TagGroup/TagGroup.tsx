import React from 'react';
import { HStack } from '@chakra-ui/react';
import { Tag } from '../Tag/Tag';

const TagGroup = ({ data }: any) => {
  return (
    <HStack spacing={4}>
      {data.map((data: any) => (
        <Tag label={data.label} />
      ))}
    </HStack>
  );
};

export default TagGroup;
