import React from 'react';
import { Box, Divider } from '@chakra-ui/react';
import { JobPost } from './JobPost';

export const Content = () => {
  return (
    <Box className="content">
      <Divider />
      <JobPost />
      <JobPost />
    </Box>
  );
};
