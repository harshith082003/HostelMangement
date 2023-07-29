import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
export default function StudentField({ data, field }) {
  return (
    <Box>
        <Heading size='md' >
            {field}
        </Heading>
        <Text pt='2' fontSize='xl'>
            {data}
        </Text>
    </Box>
  )
}
