import React from 'react';
import { Box, Button } from '@chakra-ui/react';

export const QuickLinks = () => {
  return (
    <Box className="quicklinks">
      <Button fontFamily={'Space Mono'}>Post a Job</Button>
      <Button fontFamily={'Space Mono'}>Login</Button>
    </Box>
  );
};
