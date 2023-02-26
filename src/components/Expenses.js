import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { AiFillFilePdf } from 'react-icons/ai'

const Expenses = ({setPersonalExpenses, setExpenses, setBusinessExpenses}) => {
  return (
    <>
    <Flex
    bg='#fafafa'
    flexDir='row'
    p='6'
    justifyContent='flex-start'>
        
        <Heading as='h3' size='lg'>Expenses</Heading> 
    </Flex>
            <Flex flexDir='column' alignItems='center'>
            <Button onClick={ () => setPersonalExpenses(true) & setExpenses(false) & setBusinessExpenses(false) } w='85%' leftIcon={<AiFillFilePdf color='white'/>}  rounded='2xl' bg='#0066ff' color='white' _hover={{transform:'Scale(1.03)'}}>Add Personal Expense</Button>
            <Button onClick={ () => setBusinessExpenses(true) & setExpenses(false) & setPersonalExpenses(false)} w='85%' mt='20px' leftIcon={<AiFillFilePdf color='white'/>}  rounded='2xl' bg='#0066ff' color='white' _hover={{transform:'Scale(1.03)'}}>Add Business Expense</Button>
        </Flex>
        </>
      )
}

export default Expenses