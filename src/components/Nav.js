import React from 'react';
import { Box, Heading, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const jobSeekers = ['Search Jobs', 'Search Salaries', 'Create Free Account'];

const businesses = ['Post a Job', 'How it Works', 'Employer Support'];

export const Nav = () => {
  return (
    <Box className="nav">
      <Heading as="h1" fontFamily={'Space Mono'}>
        BOOTCAMP1ST
      </Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontFamily={'Space Mono'}>
          Job Seekers
        </MenuButton>
        <MenuList>
          {jobSeekers.map((action) => (
            <MenuItem key={action} fontFamily={'Space Mono'}>
              {action}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontFamily={'Space Mono'}>
          Businesses
        </MenuButton>
        <MenuList>
          {businesses.map((action) => (
            <MenuItem key={action} fontFamily={'Space Mono'}>
              {action}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
