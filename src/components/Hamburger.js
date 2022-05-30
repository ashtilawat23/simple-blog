import React from 'react';
import {
  Box,
  Menu,
  MenuGroup,
  MenuDivider,
  MenuItem,
  MenuButton,
  IconButton,
  MenuList
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const jobSeekers = {
  title: 'Job Seekers',
  items: ['Search Jobs', 'Search Salaries', 'Create Free Account']
};

const businesses = {
  title: 'Businesses',
  items: ['Post a Job', 'How it Works', 'Employer Support']
};

export const Hamburger = () => {
  return (
    <Box className="hamburger">
      <Menu>
        <MenuButton as={IconButton} icon={<HamburgerIcon />} />
        <MenuList>
          <MenuGroup title={jobSeekers.title} fontFamily={'Space Mono'}>
            {jobSeekers.items.map((action) => (
              <MenuItem key={action} fontFamily={'Space Mono'}>
                {action}
              </MenuItem>
            ))}
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Businesses" fontFamily={'Space Mono'}>
            {businesses.items.map((action) => (
              <MenuItem key={action} fontFamily={'Space Mono'}>
                {action}
              </MenuItem>
            ))}
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};
