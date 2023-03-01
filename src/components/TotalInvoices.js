import { Button, Flex, Heading, IconButton, Input, InputGroup, InputLeftAddon, InputRightAddon, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import {React, useState, useEffect} from 'react'
import { AiFillFilePdf} from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'


const TotalInvoices = ({setTotalinv, setInv}) => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState([]);

  const deleteUser = ( id, productName) => {
    if (window.confirm(`Are you sure you want to delete ${productName} ?`)){
      fetch("http://localhost:1337/deleteInvoice", {
        method:"POST",
        crossDomain: true,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          userid: id,
        }),
      }).then ((res) => res.json())
        .then((data) => {
          alert(data.data)
          toast.success('Deleted Successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            
          
        }).then(() => {
          window.location.reload();
        })
        
  } else {
  
  }
  };

  useEffect(() => {
    fetch ("http://localhost:1337/getInvoice", {
        method:"GET",

    }).then((res) => res.json())
      .then((data) => {
    console.log(data)
    setData(data.data);
})    
}, []);



  return (
   <>
    <Flex 
    flexDir='row' 
    justifyContent='space-between'
    alignItems='center'
    p='5' >
    <Heading>Products</Heading>
    <Button onClick={() => setTotalinv(false) & setInv(true)} w='85%' leftIcon={<AiFillFilePdf color='white'/>}  rounded='2xl' bg='#0066ff' color='white' _hover={{transform:'Scale(1.03)'}}>Add New Product</Button>
        </Flex>
        <Flex flexDir='column' justifyContent='space-between'>
            <Flex flexDir='row' p='4'>
                <InputGroup>
                <InputLeftAddon>{<HiUserCircle size='30px'/> }</InputLeftAddon> 
                <Input type='text' placeholder='Name' onChange={(e) => setSearchName(e.target.value)}/>
                {/* <InputRightAddon>{<BsSearch/>}</InputRightAddon> */}
                </InputGroup>
               
            </Flex>
            
        </Flex>
       


     <Flex
     p='8'
     justifyContent='space-around' 
     flexDir='column'
     bg='white'
     rounded='md'>
      
      
     
          <TableContainer>
          <Table variant='simple'>
            <TableCaption>USER DETAILS</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th >Quantity</Th>
                {/* <Th>Address</Th> */}
                <Th>Price</Th>
                <Th>Options</Th>
                
              </Tr>
            </Thead>
            {data.filter((data) => {
  if (searchName == "") {
    return data
  }else if (data.productName.toLowerCase().includes(searchName.toLowerCase()))
    return data
  
  
}).map(id => {
        return(
          
            <Tbody>
              <Tr>
                <Td>{id.productId}</Td>
                <Td>{id.productName}</Td>
                <Td>{id.productPrice}</Td>
                <Td>{id.productQuantity}</Td>
                <Td>
         
           
          
           
            <Button size='sm' bg='#eb1f12' color='white' _hover={{bg:'#bc1707', color:'white'}} borderRadius='3xl' onClick={() => deleteUser(id._id, id.productName)}>Delete</Button>
          
      </Td>
              </Tr>
             
            </Tbody>
        
        )})}

          </Table>
        </TableContainer>
        
       
        <Heading>Total Price: $ {data.reduce((accumulator, currentValue) => accumulator + currentValue.productPrice, 0)}</Heading>
       
      
       </Flex>  
       <ToastContainer/>
     
      
</>
  )
}

export default TotalInvoices