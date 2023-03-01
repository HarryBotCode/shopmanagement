import { Button, Divider, Flex } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { TbFileInvoice } from 'react-icons/tb'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BsArchive } from 'react-icons/bs'

const Sidebar = ({ setInv, setSales,  setExpenses, setPersonalExpenses, setBusinessExpenses, setTotalinv, setTotalPersonalExpenses, setTotalBusinessExpenses }) => {
  return (
    <Flex
      flexDir='column'
      alignItems='center'
      p='5px'
      mt='5px'
      h='100vh'
    >
      <Button
        onClick={() => setSales(false) & setInv(false)  & setExpenses(false) & setPersonalExpenses(false) & setBusinessExpenses(false) & setTotalinv(false) & setTotalPersonalExpenses(false) & setTotalBusinessExpenses(false)}
        mt='10px'
        leftIcon={<AiOutlineHome color='#0066ff' size='25px' />}
        color='#0066ff'
        bg='#e5efff'
        w='100%'
        textAlign='justify'
        justifyContent='flex-start'
        fontWeight='normal'
        transitionDuration='.4s'
        _hover={{ transform: 'translateX(8px)', transitionDuration: '.4s', bg: '#e5efff' }}>
        Dashboard
      </Button>

      <Button 
      onClick={() => setInv(false) & setSales(false) & setExpenses(false) & setPersonalExpenses(false) & setBusinessExpenses(false) & setTotalinv(true) & setTotalPersonalExpenses(false) & setTotalBusinessExpenses(false)} 
      mt='10px' 
      variant='ghost' 
      leftIcon={<TbFileInvoice color='#0066ff' size='25px' />} 
      color='#0066ff'
      w='100%' 
      textAlign='justify' 
      justifyContent='flex-start' 
      fontWeight='normal' 
      transitionDuration='.4s' 
      _hover={{ transform: 'translateX(8px)', transitionDuration: '.4s', bg: '#e5efff' }}>
        Products
      </Button>

      <Button 
      onClick={() => setSales(true) & setInv(false) & setExpenses(false) & setPersonalExpenses(false) & setBusinessExpenses(false) & setTotalinv(false) & setTotalPersonalExpenses(false) & setTotalBusinessExpenses(false)} 
      mt='10px' 
      variant='ghost' 
      leftIcon={<AiOutlineUserAdd color='#0066ff' size='25px' />} 
      color='#0066ff' 
      w='100%' 
      textAlign='justify' 
      justifyContent='flex-start' 
      fontWeight='normal' 
      transitionDuration='.4s' 
      _hover={{ transform: 'translateX(8px)', transitionDuration: '.4s', bg: '#e5efff' }}>
        Sales
      </Button>

      <Button 
      onClick={() => setExpenses(true) & setSales(false) & setInv(false) & setPersonalExpenses(false) & setBusinessExpenses(false) & setTotalinv(false) & setTotalPersonalExpenses(false) & setTotalBusinessExpenses(false)} 
      variant='ghost' 
      leftIcon={<BsArchive color='#0066ff' size='25px' />} 
      color='#0066ff' 
      w='100%' 
      textAlign='justify' 
      justifyContent='flex-start' 
      fontWeight='normal' 
      transitionDuration='.4s' 
      _hover={{ transform: 'translateX(8px)', transitionDuration: '.4s', bg: '#e5efff' }}>
        Expenses
      </Button>

      <Divider />



    </Flex>
  )
}

export default Sidebar