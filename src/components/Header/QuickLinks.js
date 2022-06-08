import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import AuthenticationButton from './AuthenticationButton';

export const QuickLinks = () => {
  return (
    <Box className="quicklinks">
      <Button fontFamily={'Space Mono'}>Post a Job</Button>
      <AuthenticationButton />
    </Box>
  );
};
