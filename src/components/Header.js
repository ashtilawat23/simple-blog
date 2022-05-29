import React from 'react';
import { Box } from '@chakra-ui/react';
import { Nav } from './Nav';
import { QuickLinks } from './QuickLinks';

export const Header = () => {
  return (
    <Box className="header">
      <Nav />
      <QuickLinks />
    </Box>
  );
};
