import React from 'react';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { Icon } from '../../atoms/Icon';
import { SimpleMenuProps } from './simpleMenu.interfaces';

const SimpleMenu = ({ onEdit, onDelete }: SimpleMenuProps) => {
  return (
    <Menu>
      <MenuButton
        style={{ position: 'absolute', top: 8, right: 8 }}
        as={IconButton}
        isRound
        variant="ghost"
        aria-label="Options"
        icon={<Icon iconName="menu" />}
      />
      <MenuList>
        <MenuItem onClick={onEdit}>Editar</MenuItem>
        <MenuItem onClick={onDelete}>Excluir</MenuItem>
      </MenuList>
    </Menu>
  );
};

export { SimpleMenu };
