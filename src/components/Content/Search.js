import React from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

export const Search = () => {
  return (
    <Box className="search">
      <Input placeholder="What job are you looking?" size="lg" width="90%" />
      <Button fontFamily="Space Mono" size="lg" marginInlineStart={5}>
        Search
      </Button>
    </Box>
  );
};
