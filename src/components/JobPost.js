import React from 'react';
import {
  Box,
  Image,
  Text,
  Badge,
  Button,
  ButtonGroup,
  Tag,
  IconButton,
  useMediaQuery
} from '@chakra-ui/react';
import { ExternalLinkIcon, ChevronUpIcon } from '@chakra-ui/icons';

export const JobPost = (props) => {
  const [isLargerThan1300] = useMediaQuery('(min-width: 1300px)');
  if (isLargerThan1300) {
    return (
      <Box className="jobpost" borderRadius={'lg'} borderWidth="1px" p={2}>
        <Image
          borderRadius={'lg'}
          boxSize="5vh"
          src={props.source}
          alt={props.company}
        />
        <Box className="jobinfo">
          <Text fontFamily={'Space Mono'} fontSize="sm">
            {props.company}
          </Text>
          <Text fontFamily={'Space Mono'} fontSize="sm">
            {props.title}
          </Text>
          <Box className="badges">
            <Badge me={'5%'}>{props.location}</Badge>
            <Badge colorScheme={'green'}>{props.salary}</Badge>
          </Box>
        </Box>
        <Box className="tags">
          <Tag variant={'outline'} colorScheme="yellow">
            {props.tags[0]}
          </Tag>
          <Tag variant={'outline'} colorScheme="cyan">
          {props.tags[1]}
          </Tag>
          <Tag variant={'outline'} colorScheme="orange">
          {props.tags[2]}
          </Tag>
        </Box>
        <ButtonGroup>
          <Button rightIcon={<ExternalLinkIcon />} fontFamily={'Space Mono'}>
            Recruiter
          </Button>
          <Button rightIcon={<ExternalLinkIcon />} fontFamily={'Space Mono'}>
            Apply
          </Button>
        </ButtonGroup>
        <Button as={IconButton} icon={<ChevronUpIcon />} />
      </Box>
    );
  } else {
    return (
      <Box className="jobpostsm" borderRadius={'lg'} borderWidth="1px" p={2}>
        <Image
          borderRadius={'lg'}
          boxSize="5vh"
          src={props.source}
          alt={props.company}
        />
        <Box className="jobinfosm">
          <Text fontFamily={'Space Mono'} fontSize="sm">
            {props.company}
          </Text>
          <Text fontFamily={'Space Mono'} fontSize="sm">
            {props.title}
          </Text>
          <Box className="badges">
            <Badge me={'5%'}>{props.location}</Badge>
            <Badge colorScheme={'green'}>{props.salary}</Badge>
          </Box>
        </Box>
        <ButtonGroup>
          <Button rightIcon={<ExternalLinkIcon />} fontFamily={'Space Mono'}>
            Recruiter
          </Button>
          <Button rightIcon={<ExternalLinkIcon />} fontFamily={'Space Mono'}>
            Apply
          </Button>
        </ButtonGroup>
        <Button as={IconButton} icon={<ChevronUpIcon />} />
      </Box>
    );
  }
};
