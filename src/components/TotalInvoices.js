import { Button, Flex, Heading, IconButton, Input, InputGroup, InputLeftAddon, InputRightAddon, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import {React, useState, useEffect} from 'react'
import { AiFillFilePdf, AiFillPhone} from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import { SlOptions } from 'react-icons/sl'
import { TbFileInvoice } from 'react-icons/tb'
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
import { BsSearch } from 'react-icons/bs'

const TotalInvoices = ({setTotalinv, setInv}) => {
  const [data, setData] = useState([]);

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
                <Input type='text' placeholder='Name'/>
                <InputRightAddon>{<BsSearch/>}</InputRightAddon>
                </InputGroup>
                <InputGroup ml='20px'>
                <InputLeftAddon >{<AiFillPhone size='30px'/>}</InputLeftAddon>
                <Input type='number' placeholder='Phone Name' />
                <InputRightAddon>{<BsSearch/>}</InputRightAddon>
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
                <Th>Name</Th>
                <Th>Email</Th>
                <Th >Phone no.</Th>
                {/* <Th>Address</Th> */}
                <Th>ProductName</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            {data.map(id => {
        return(
          
            <Tbody>
              <Tr>
                <Td>{id.name}</Td>
                <Td>{id.email}</Td>
                <Td >{id.mobile}</Td>
                {/* <Td>{id.address}</Td> */}
                <Td>{id.productName}</Td>
                <Td>{id.productQuantity}</Td>
                <Td>{id.productPrice}</Td>
                <Td><Menu w='100px' textAlign='start'>
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
      </Menu></Td>
              </Tr>
             
            </Tbody>
           )
          })}
          </Table>
        </TableContainer>
        
       
       
       
        {/* <Text fontWeight='normal' w='100px' textAlign='start'> <Highlight
          query='Paid'
          styles={{ px: '2', py: '1', rounded: 'full', bg: '#bbf7d0' }}
          w='100px'
        >
          Paid
        </Highlight>
        </Text> */}
    
       
        
        
             
       
       {/* <Flex>
                <IconButton icon={<AiOutlineLeft/>} border='1px'></IconButton> 
                <Button>1</Button>
                <IconButton icon={<AiOutlineRight/>} border='1px'></IconButton> 

              </Flex>   */}
       </Flex>  
       
     
      
</>
  )
}

export default TotalInvoices