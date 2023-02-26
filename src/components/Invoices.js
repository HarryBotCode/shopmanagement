import { Button, Flex, Heading, HStack, IconButton, Input, Text } from '@chakra-ui/react'
import {React, useState} from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {AiFillEye} from 'react-icons/ai'
import {IoSettingsSharp} from 'react-icons/io5'
import {AiFillFilePdf} from 'react-icons/ai'
import {FiDownload} from 'react-icons/fi'
import {AiOutlineCheck} from 'react-icons/ai'
import {FcPaid} from 'react-icons/fc'
import {MdPaid} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'


const Invoices = ({setTotalinv, setInv}) => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [car, setCar] = useState("");
    
    
    const handleInvoice = async (e) => {
       
        e.preventDefault();

      const req = await fetch ("http://localhost:1337/api/invoice", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: await JSON.stringify ({
                name,
                address,
                mobile, 
                email,
                productName,
                productQuantity,
                productPrice,
                car,
            })
        })
        }

        

  return (
    <>
    <Flex
    flexDir='column'
    bg='#fafafa'
    p='5'>
        <Heading as='h3' size='lg'> New Product</Heading>
    
    <Flex flexDir='row' alignItems='center' rounded='md' bg='white' p='6' justifyContent='space-between' mt='20px'>
        <IconButton onClick={() => setTotalinv(true) & setInv(false)} icon={<IoMdArrowRoundBack color='#0066ff' size='25px' />} ></IconButton>
        <Button leftIcon={<AiFillEye/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>View Mode</Button> 
        <Button leftIcon={<IoSettingsSharp/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Settings</Button> 
        <Button leftIcon={<AiFillFilePdf/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Export PDF</Button> 
        <Button leftIcon={<FiDownload/>} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'none'}} fontWeight='normal'>Download Image</Button> 
    </Flex>
    <form onSubmit={handleInvoice}>
    <Flex flexDir='column' justifyContent='space-between' p='12'>
        <Flex flexDir='column' >
            <Heading>Billing To</Heading>
           
            <Input 
            mt='10px' 
            type='text' 
            placeholder='Client Name' 
            h='35px' 
            rounded='xl' 
            border='1px' 
            borderColor='#0066ff'
            value={name}
            onChange = {(e) => setName(e.target.value)} 
            ></Input>

<Input 
            mt='10px' 
            type='text' 
            placeholder='Client Name' 
            h='35px' 
            rounded='xl' 
            border='1px' 
            borderColor='#0066ff'
            value={car}
            onChange = {(e) => setCar(e.target.value)} 
            ></Input>

            <Input 
            mt='10px' 
            type='text' 
            placeholder='Client Address' 
            h='35px' 
            rounded='xl' 
            border='1px' 
            borderColor='#0066ff'
            value={address}
            onChange = {(e) => setAddress(e.target.value)} 
            ></Input>

            <Input 
            mt='10px' 
            type='text' 
            placeholder='Client Mobile' 
            h='35px' 
            rounded='xl' 
            border='1px' 
            borderColor='#0066ff'
            value={mobile}
            onChange = {(e) => setMobile(e.target.value)} 
            ></Input>

            <Input 
            mt='10px' 
            type='text' 
            placeholder='Client Email' 
            h='35px' 
            rounded='xl' 
            border='1px' 
            borderColor='#0066ff'
            value={email}
            onChange = {(e) => setEmail(e.target.value)} ></Input>
          
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
            <Input 
            mt='10px' 
            w='200px' 
            type='text' 
            placeholder='Product Name' 
            h='35px' 
            textAlign='end' 
            rounded='xl' 
            border='1px' 
            borderColor='#0066ff'
            value={productName}
            onChange = {(e) => setProductName(e.target.value)}></Input>

            <Input 
            mt='10px' 
            w='200px' 
            type='text' 
            placeholder='Price' 
            h='35px' 
            textAlign='end' 
            rounded='xl' 
            border='1px' 
            borderColor='#0066ff'
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}></Input>

            <Input 
            mt='10px' 
            w='200px' 
            type='quantity' 
            placeholder='1' 
            h='35px' 
            textAlign='end' 
            rounded='xl' 
            border='1px' 
            borderColor='#0066ff'
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}></Input>
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
            <Button leftIcon={<FcPaid color='white' size='30px'/>} rounded='xl' border='1px' borderColor='#0066ff' h='50px' color='white' bg='#16a34a' textAlign='center' w='300px' transitionDuration='.2s'  _hover={{transform:'scale(1.04)', transitionDuration:'.2s', bg:'#16a34a'}} fontWeight='normal' type='submit' >Save As Paid</Button> 
        
        </Flex>
       </form>

       
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