import React from 'react';
import { HStack } from '@chakra-ui/react';
import { Tag } from '../Tag/Tag';
import { IconedButton } from '../IconedButton';
import { Icon } from '../Icon';

const TagGroup = ({ data, create }: any) => {
  return (
    <>
      {create && (
        <IconedButton
          label="Criar Tag"
          icon={
            <Icon
              name="plus"
              variant="secondary"
              size={16}
              style={{ marginLeft: 8 }}
            />
          }
        />
      )}
      <HStack spacing={4}>
        {data.map((data: any) => (
          <Tag label={data.label} />
        ))}
      </HStack>
    </>
  );
};

export default TagGroup;
