import React from 'react'
import { Button, Flex, IconButton, Input, Menu, MenuButton, MenuItem, MenuList ,Text, Highlight} from '@chakra-ui/react'
import { AiFillFilePdf, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import { SlOptions } from 'react-icons/sl'
import { TbFileInvoice } from 'react-icons/tb'

const TotalPersonalExpense = ({setPersonalExpenses, setExpenses}) => {
  return (
    <>
    <Flex 
    flexDir='row' 
    justifyContent='center'
    alignItems='center'
    p='5' >
    
    <Button onClick={ () => setPersonalExpenses(true) & setExpenses(false) } w='85%' leftIcon={<AiFillFilePdf color='white'/>}  rounded='2xl' bg='#0066ff' color='white' _hover={{transform:'Scale(1.03)'}}>Add Personal Expense</Button>
        </Flex>
        <Flex flexDir='column' justifyContent='space-between'>
            <Flex flexDir='row' p='4'>
                <IconButton icon={<TbFileInvoice size='30px'/> } border='none'></IconButton>
                <Input type='text' placeholder='Invoice No' ml='10px'/>
                <IconButton  ml='30px' icon={<HiUserCircle size='30px'/>}></IconButton>
                <Input type='text' placeholder='User Name'  ml='10px'/>
            </Flex>
            
        </Flex>
       


     <Flex
     p='8'
     justifyContent='space-around' 
     flexDir='column'
     bg='white'
     rounded='md'>
      
      
       <Flex flexDir='column' >
       <Flex justifyContent='space-between' p='2' flexDir='row'>
        <Text fontWeight='normal' w='100px' textAlign='start'>Invoice Name</Text>
        <Text fontWeight='normal' w='100px' textAlign='start'>Client Name</Text>
        <Text fontWeight='normal' w='100px' textAlign='start'>Status</Text>
        <Text fontWeight='normal' w='100px' textAlign='start'>Amount</Text>
        <Text fontWeight='normal' w='100px' textAlign='start'>Action</Text>
       </Flex>
      
       
       <Flex justifyContent='space-between' flexDir='row' p='6' mr='30px'>
        <Text fontWeight='normal' w='100px' textAlign='start'></Text>
        <Text fontWeight='normal' w='100px' textAlign='start'></Text>
        <Text fontWeight='normal' w='100px' textAlign='start'> <Highlight
          query='Paid'
          styles={{ px: '2', py: '1', rounded: 'full', bg: '#bbf7d0' }}
          w='100px'
        >
          Paid
        </Highlight>
        </Text>
    
        <Text fontWeight='normal' w='100px' textAlign='start'>1200</Text>
        
        <Menu w='100px' textAlign='start'>
          <MenuButton
            
            as={IconButton}
            aria-label='Options'
            icon={<SlOptions />}
            variant='ghost'
            bg='none'
            _hover={{bg:'none'}}
          />
          <MenuList>
            <MenuItem>
              Detail
            </MenuItem>
            <MenuItem>
              Delete
            </MenuItem>
    
        </MenuList>
      </Menu>
             
       </Flex>
       <Flex>
                <IconButton icon={<AiOutlineLeft/>} border='1px'></IconButton> 
                <Button>1</Button>
                <IconButton icon={<AiOutlineRight/>} border='1px'></IconButton> 

              </Flex>  
       </Flex>  
       
     
      </Flex>
</>
  )
}

export default TotalPersonalExpense