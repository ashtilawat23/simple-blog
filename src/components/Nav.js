import React from 'react';
import { Dropdown } from './common/Dropdown';
import { Box } from '@chakra-ui/react';

const jobSeekers = {title: 'Job Seekers', items: ['Search Jobs', 'Search Salaries', 'Create Free Account']};

const businesses = {title: 'Businesses', items: ['Post a Job', 'How it Works', 'Employer Support']};

export const Nav = () => {
  return (
    <Box className='nav'>
        <Dropdown title={jobSeekers.title} items={jobSeekers.items} />
        <Dropdown title={businesses.title} items={businesses.items} />
    </Box>
  );
};
