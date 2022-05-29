import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export const Dropdown = ({ title, items }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {title}
      </MenuButton>
      <MenuList>
        {items.map((action) => (
          <MenuItem key={action}>{action}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
