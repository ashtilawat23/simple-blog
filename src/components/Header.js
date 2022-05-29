import React from 'react';
import { Box, Heading, Button, useMediaQuery } from '@chakra-ui/react';
import { Hamburger } from './Hamburger';
import { Nav } from './Nav';
import { QuickLinks } from './QuickLinks';

export const Header = () => {
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
  if (isLargerThan1200) {
    return (
      <Box className="header">
        <Nav />
        <QuickLinks />
      </Box>
    );
  } else {
    return (
      <Box className="hamburgerHeader">
        <Box className="hamburgerLeft">
          <Heading as="h1" fontFamily={'Space Mono'}>
            BOOTCAMP1ST
          </Heading>
          <Button>Post a Job</Button>
        </Box>
        <Hamburger />
      </Box>
    );
  }
};
