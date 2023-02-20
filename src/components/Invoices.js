import { Button, Flex, Heading, HStack, IconButton, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {AiFillEye} from 'react-icons/ai'
import {IoSettingsSharp} from 'react-icons/io5'
import {AiFillFilePdf} from 'react-icons/ai'
import {FiDownload} from 'react-icons/fi'
import {AiOutlineCheck} from 'react-icons/ai'
import {FcPaid} from 'react-icons/fc'
import {MdPaid} from 'react-icons/md'

const Invoices = ({setSearchinv, setInv}) => {
  return (
    <>
    <Flex
    flexDir='column'
    bg='#fafafa'
    p='5'>
        <Heading as='h3' size='lg'> New Invoice</Heading>
    
    <Flex flexDir='row' alignItems='center' rounded='md' bg='white' p='6' justifyContent='space-between' mt='20px'>
        <IconButton onClick={() => setSearchinv(false) & setInv(true)} icon={<IoMdArrowRoundBack color='#0066ff' size='25px' />} ></IconButton>
        <Button leftIcon={<AiFillEye/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>View Mode</Button> 
        <Button leftIcon={<IoSettingsSharp/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Settings</Button> 
        <Button leftIcon={<AiFillFilePdf/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Export PDF</Button> 
        <Button leftIcon={<FiDownload/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Download Image</Button> 
    </Flex>
    <Flex flexDir='column' justifyContent='space-between' p='12'>
        <Flex flexDir='column' >
            <Heading>Billing To</Heading>
            <Input mt='10px' type='text' placeholder='Client Name' h='35px' rounded='xl' border='1px' borderColor='#0066ff'></Input>
            <Input mt='10px' type='text' placeholder='Client Address' h='35px' rounded='xl' border='1px' borderColor='#0066ff'></Input>
            <Input mt='10px' type='text' placeholder='Client Mobile' h='35px' rounded='xl' border='1px' borderColor='#0066ff'></Input>
            <Input mt='10px' type='text' placeholder='Client Email' h='35px' rounded='xl' border='1px' borderColor='#0066ff'></Input>
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
       </Flex>
       
       <Flex flexDir='row' alignItems='center' rounded='md' bg='white' p='8' justifyContent='space-around' >
        
        <Button leftIcon={<AiOutlineCheck size='30px'/>}  rounded='xl' border='1px' borderColor='#0066ff' h='50px' color='#0066ff' bg='transparent' textAlign='center' w='300px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Save As Draft</Button> 
        <Button leftIcon={<MdPaid color='red' size='30px'/>} rounded='xl' border='1px' borderColor='red' h='50px' color='red' bg='transparent' textAlign='center' w='300px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Save As Unpaid</Button> 
        <Button leftIcon={<FcPaid color='white' size='30px'/>} rounded='xl' border='1px' borderColor='#0066ff' h='50px' color='white' bg='#16a34a' textAlign='center' w='300px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'#16a34a'}} fontWeight='normal'>Save As Paid</Button> 
        
    </Flex>
       
       <Flex flexDir='row' alignItems='center' rounded='md' bg='white' p='6' justifyContent='space-between' mt='20px'>
        <IoMdArrowRoundBack color='#0066ff' size='25px' />
        <Button leftIcon={<AiFillEye/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>View Mode</Button> 
        <Button leftIcon={<IoSettingsSharp/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Settings</Button> 
        <Button leftIcon={<AiFillFilePdf/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Export PDF</Button> 
        <Button leftIcon={<FiDownload/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Download Image</Button> 
    </Flex>
       </Flex>
    </>
  )
}

export default Invoices