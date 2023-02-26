import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from 'react-router-dom'
const Header = () => {

  const navigate = useNavigate();

  const handleRefreshClick = () => {
   
    window.localStorage.clear();
  
    navigate('/');
   
  };
  return (
    <Flex flexDir='row' justifyContent='space-between' mt={3} px={8}>
    <Heading color='#0066ff' as='h2' size='md'>SHOP MANAGMENT</Heading>
    <Button onClick={handleRefreshClick}>Logout</Button>
    </Flex>
  )
}

export default Header