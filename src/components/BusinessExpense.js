import { Button, Flex, Heading, IconButton, Input , Text, HStack} from '@chakra-ui/react'
import React from 'react'
import { AiFillEye, AiFillFilePdf, AiOutlineCheck } from 'react-icons/ai'
import { FcPaid } from 'react-icons/fc'
import { FiDownload } from 'react-icons/fi'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdPaid } from 'react-icons/md'

const BusinessExpense = ({setExpenses, setClient, setInv, setSearchinv, setPersonalExpenses}) => {
  return (
    <>
    <Flex
    bg='#fafafa'
    p='6'
    justifyContent='flex-start'
    flexDir='column'>

        <Flex w='100%' flexDir='row' alignItems='center' rounded='md' bg='white' p='6' justifyContent='space-between' mt='20px'>
        <IconButton onClick={()=> setExpenses(true) & setClient(false) & setInv(false) & setSearchinv(false) & setPersonalExpenses(false) } icon={<IoMdArrowRoundBack color='#0066ff' size='25px' />} ></IconButton>
    
        <Button leftIcon={<AiFillEye/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>View Mode</Button> 
        <Button leftIcon={<IoSettingsSharp/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Settings</Button> 
        <Button leftIcon={<AiFillFilePdf/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Export PDF</Button> 
        <Button leftIcon={<FiDownload/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Download Image</Button> 
        
</Flex>
<Flex flexDir='row' justifyContent='space-between' p='12'>
        <Flex flexDir='column' >
            <Heading>Business Expense</Heading>
            <Input mt='20px' type='text' placeholder='Product Name' h='35px' rounded='xl' border='1px' borderColor='#0066ff'></Input>
            <Input mt='20px' type='text' placeholder='Product Details' h='35px' rounded='xl' border='1px' borderColor='#0066ff'></Input>
    
        </Flex>

        <Flex flexDir='column' >
            <HStack mt='20px'>
                <Text w='100%'>INVOICE #</Text>
                <Input mt='10px' type='text' placeholder='Invoice No' h='35px' textAlign='end' rounded='xl' border='1px' borderColor='#0066ff'></Input>
            </HStack> 
           
            <HStack mt='20px'>
                <Text w='100%'>Creation Date</Text>
                <Input mt='10px' type='date' placeholder='Client Address' h='35px' textAlign='end' rounded='xl' border='1px' borderColor='#0066ff'></Input>
            </HStack>
            
            <HStack mt='20px'>
                <Text w='100%'>Due Date</Text>
                <Input mt='10px' type='date' placeholder='Client Mobile' h='35px' textAlign='end' rounded='xl' border='1px' borderColor='#0066ff'></Input>
            </HStack>
        
         </Flex>

    </Flex>

    </Flex>
    <Flex flexDir='row' mt='30px' alignItems='center' rounded='md' bg='#686de0' p='6' justifyContent='space-between' textAlign='end'>
        <Text  w='100px'  color='white' textAlign='end'>Description</Text>
        <Text  w='100px' textAlign='end' color='white'>Price</Text>
        <Text  w='100px' textAlign='end' color='white'>Qty</Text>
        <Text  w='100px' textAlign='end' color='white'>Total</Text>
        
       </Flex>
       <Flex flexDir='row' alignItems='center' p='6' justifyContent='space-between' textAlign='end'>
            <Input mt='10px' w='200px' type='text' placeholder='Product Name' h='35px' textAlign='end' rounded='xl' border='1px' borderColor='#0066ff'></Input>
            <Input mt='10px' w='200px' type='text' placeholder='Price' h='35px' textAlign='end' rounded='xl' border='1px' borderColor='#0066ff'></Input>
            <Input mt='10px' w='200px' type='quantity' placeholder='1' h='35px' textAlign='end' rounded='xl' border='1px' borderColor='#0066ff'></Input>
                <Text  textAlign='end' color='black' w='200px'>Rs 1200</Text>
        
       </Flex>
       <Flex flexDir='row' alignItems='center'  p='6' justifyContent='flex-end' >
           <HStack spacing='170px'>
           <Text w='100px' textAlign='end' color='black'>SubTotal</Text>
            <Text w='100px' textAlign='end' color='black'>Rs 1200</Text>
           </HStack>
            
        
       </Flex>
       <Flex flexDir='row' alignItems='center' rounded='lg'  justifyContent='flex-end' >
           <Flex bg='#686de0' p='6' justifyContent='space-between' rounded='lg' h='60px'>
            <HStack>
            <Text w='200px' textAlign='center' color='white'>Total</Text>
            <Text w='200px' textAlign='end' color='white'>Rs 1200</Text>
            </HStack>
        </Flex>
            
       
</Flex>
<Flex flexDir='row' alignItems='center' rounded='md' bg='white' p='8' justifyContent='space-around' >
        
        <Button leftIcon={<AiOutlineCheck size='30px'/>}  rounded='xl' border='1px' borderColor='#0066ff' h='50px' color='#0066ff' bg='transparent' textAlign='center' w='300px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Save As Draft</Button> 
        <Button leftIcon={<MdPaid color='red' size='30px'/>} rounded='xl' border='1px' borderColor='red' h='50px' color='red' bg='transparent' textAlign='center' w='300px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Save As Unpaid</Button> 
        <Button leftIcon={<FcPaid color='white' size='30px'/>} rounded='xl' border='1px' borderColor='#0066ff' h='50px' color='white' bg='#16a34a' textAlign='center' w='300px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'#16a34a'}} fontWeight='normal'>Save As Paid</Button> 
        
    </Flex>
    </>
  )
}

export default BusinessExpense