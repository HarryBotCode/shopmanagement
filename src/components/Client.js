import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Client = () => {
  return (
    <Flex
    bg='#fafafa'
    flexDir='row'
    p='6'
    justifyContent='flex-start'>
        
        <Heading as='h3' size='lg'>Clients</Heading>
        
    </Flex>
  )
}

export default Client