/* eslint-disable react/require-default-props */
import React from 'react';
import { HStack, Tag as TagChakra, TagLabel } from '@chakra-ui/react';
import { Tag } from '../Tag/Tag';
import { TagProps } from '../Tag/tag.interfaces';

type TagGroupProps = {
  data: TagProps[];
  onClick?: (value: string) => void;
};

export const TagGroup = ({
  data,
  onClick = () => {},
  ...rest
}: TagGroupProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <HStack>
        {data.map((data: any) => (
          <Tag {...rest} label={data.label} size="lg" onClick={onClick} />
        ))}
      </HStack>
    </div>
  );
};
