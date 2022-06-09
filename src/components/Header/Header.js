import React from 'react';
import { Box, Heading, Button, useMediaQuery, ButtonGroup } from '@chakra-ui/react';
import AuthenticationButton from './AuthenticationButton';

export const Header = () => {
  const [isLargerThan1300, isLargerThan900] = useMediaQuery([
    '(min-width: 1300px)',
    '(min-width: 900px)'
  ]);

  if (isLargerThan1300) {
    return (
      <Box className="header">
        <Heading as="h1" fontFamily={'Space Mono'} width="75%">
          BOOTCAMP1ST
        </Heading>
        <Box className="quicklinks">
          <Button fontFamily={'Space Mono'}>Post a Job</Button>
          <AuthenticationButton />
        </Box>
      </Box>
    );
  } else if (isLargerThan900) {
    return (
      <Box className="headerSM">
        <Heading as="h1" fontFamily={'Space Mono'} width="40%">
          BOOTCAMP1ST
        </Heading>
        <Box className="quicklinksSM">
          <ButtonGroup spacing={4}>
            <Button fontFamily={'Space Mono'}>Post a Job</Button>
            <AuthenticationButton />
          </ButtonGroup>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box className="headerXS">
        <Heading as="h1" fontFamily={'Space Mono'} width="50%">
          BOOTCAMP1ST
        </Heading>
        <AuthenticationButton />
      </Box>
    );
  }
};
