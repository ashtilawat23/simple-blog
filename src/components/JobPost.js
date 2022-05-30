import React from 'react';
import { Box, Image, Text, Badge, Button, ButtonGroup, Tag, IconButton } from '@chakra-ui/react';
import { ExternalLinkIcon, ChevronUpIcon } from '@chakra-ui/icons';

export const JobPost = () => {
  return (
    <Box className="jobpost" borderRadius={'lg'} borderWidth="1px" p={2}>
      <Image
        borderRadius={'lg'}
        boxSize="5vh"
        src="https://cdn.worldvectorlogo.com/logos/meta-1.svg"
        alt="Meta"
      />
      <Box className="jobinfo">
        <Text fontFamily={'Space Mono'} fontSize='sm'>Meta</Text>
        <Text fontFamily={'Space Mono'} fontSize='sm'>Frontend Engineer</Text>
        <Box className="badges">
          <Badge me={'5%'}>Los Angeles</Badge>
          <Badge colorScheme={'green'}>$90k - $120k</Badge>
        </Box>
      </Box>
      <Box className='tags'>
        <Tag variant={'outline'} colorScheme='yellow'>JavaScript</Tag>
        <Tag variant={'outline'} colorScheme='cyan'>React</Tag>
        <Tag variant={'outline'} colorScheme='orange'>Node</Tag>
      </Box>
      <ButtonGroup>
      <Button rightIcon={<ExternalLinkIcon/>}>Recruiter</Button>
      <Button rightIcon={<ExternalLinkIcon/>}>Apply</Button>
      </ButtonGroup>
      <Button as={IconButton} icon={<ChevronUpIcon/>} />
    </Box>
  );
};
