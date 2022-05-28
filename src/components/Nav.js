import React from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const jobSeekers = ['Search Jobs', 'Search Salaries', 'Create Free Account'];

const businesses = ['Post a Job', 'How it Works', 'Employer Support'];

export const Nav = () => {
  return (
    <Box className='nav'>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Job Seekers
        </MenuButton>
        <MenuList>
            {jobSeekers.map((action) => 
                <MenuItem key={action}>{action}</MenuItem>
            )}
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Businesses
        </MenuButton>
        <MenuList>
            {businesses.map((action) => 
                <MenuItem key={action}>{action}</MenuItem>
            )}
        </MenuList>
      </Menu>
    </Box>
  );
};
