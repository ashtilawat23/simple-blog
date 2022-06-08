import React from 'react';
import { Box, Heading, Button, useMediaQuery } from '@chakra-ui/react';
import { Hamburger } from './Header/Hamburger';
import { Nav } from './Nav';
import { QuickLinks } from './QuickLinks';

export const Header = () => {
  const [isLargerThan1300] = useMediaQuery('(min-width: 1300px)');
  if (isLargerThan1300) {
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
          <Button fontFamily={'Space Mono'}>Post a Job</Button>
        </Box>
        <Hamburger />
      </Box>
    );
  }
};
