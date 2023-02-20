import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Flex flexDir='row' justifyContent='center' mt={3}>
    <Heading color='#0066ff' as='h2' size='md'>SHOP MANAGMENT</Heading>
    </Flex>
  )
}

export default Header