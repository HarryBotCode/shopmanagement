import { Button, Flex, Heading, HStack,  Input, Text } from '@chakra-ui/react'
import {React, useState} from 'react'

import { HiOutlineBadgeCheck } from 'react-icons/hi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Invoices = ({setTotalinv, setInv}) => {

    
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
   
    


    const handleInvoice = async (e) => {
        e.preventDefault();
    
       
          
         
          const req = await fetch("http://localhost:1337/api/invoice", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: await JSON.stringify({
                   productId,
                   productName,
                   productPrice,
                   productQuantity,
                  
               })
           })
           const data = await req.json();
           if (data.status == "ok"){
            toast.success('Product Added Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
           }
           else {
            toast.error('ID Already Exists!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
           }
       
         
       }
        

  return (
    <> <Flex flexDir='column' justifyContent='space-between' p='12'>
    <Flex flexdir='row' justifyContent='space-between' alignItems='center'><Heading>Products Form</Heading>
        
    </Flex>

    <Flex flexDir='row' mt='30px' alignItems='center' rounded='md' bg='#686de0' py='6' justifyContent='space-between' px='20px' pr='150px' textAlign='flex-start'>
        <Text  color='white' >Product ID</Text>
        <Text  color='white'>Name</Text>
        <Text  color='white' >Quantity</Text>
        <Text  color='white'>Price</Text>
      

    </Flex>
    
        <form onSubmit={handleInvoice}>
            
            <Flex flexDir='row' mt='20px'>
                <HStack spacing='20px'>
                    <Input
                        w='30%'
                        type='number'
                        placeholder='ID'
                        h='35px'
                        rounded='md'
                        border='1px'
                        borderColor='#0066ff'
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}>
                       
                    </Input>

                    <Input
                        w='40%'
                        mt='20px'
                        type='text'
                        placeholder='Name'
                        h='35px'
                        rounded='md'
                        border='1px'
                        borderColor='#0066ff'
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}>

                    </Input>
                    <Input
                        w='30%'
                        mt='20px'
                        type='Quantity'
                        placeholder='Quantity'
                        h='35px'
                        rounded='md'
                        border='1px'
                        borderColor='#0066ff'
                         value={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}>

                    </Input>

                    <Input
                        w='30%'
                        mt='20px'
                        type='Price'
                        placeholder='Price'
                        h='35px'
                        rounded='md'
                        border='1px'
                        borderColor='#0066ff'
                         value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}>

                    </Input>

                   
                </HStack>
                 <Button type='submit'  h='40px' bg='none' textAlign='center' transitionDuration='.2s' _hover={{ transform: 'scale(1.5)', transitionDuration: '.2s', bg: 'none', color:'green' }} fontWeight='normal'> <HiOutlineBadgeCheck size='35px' /> </Button>
            </Flex>
            </form>  

       
           

           <ToastContainer/>
           </Flex>
</>
  
  )
}

export default Invoices