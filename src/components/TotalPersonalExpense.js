import {React, useState, useEffect} from 'react'
import { Button, Flex, Heading, IconButton, Input, InputGroup, InputLeftAddon,  Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { AiFillCalendar, AiFillFilePdf } from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import { SlOptions } from 'react-icons/sl'

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

const TotalPersonalExpense = ({setPersonalExpenses, setExpenses, setBusinessExpenses}) => {
  const [data, setData] = useState([]);
  const [searchDescription, setSearchDescription] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
    fetch ("http://localhost:1337/getPersonal", {
        method:"GET",

    }).then((res) => res.json())
      .then((data) => {
    console.log(data)
    setData(data.data);
})    
}, []);

const deleteUser = (id, description) => {
  if (window.confirm(`Are you sure you want to delete ${description} ?`)){
    fetch("http://localhost:1337/deletePersonal", {
      method:"POST",
      crossDomain: true,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        userid: id,
      }),
    }).then ((res) => res.json())
      .then((data) => {
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
      })
} else {
  toast.error('Error Not Deleted!', {
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
   <>
    <Flex 
    flexDir='row' 
    justifyContent='center'
    alignItems='center'
    p='5' >
    
    <Button onClick={() => setPersonalExpenses(true) & setExpenses(false) & setBusinessExpenses(false)} w='85%' leftIcon={<AiFillFilePdf color='white'/>}  rounded='2xl' bg='#0066ff' color='white' _hover={{transform:'Scale(1.03)'}}>Add Personal Expense</Button>
        </Flex>
        <Flex flexDir='column' justifyContent='space-between'>
        <Flex flexDir='row' p='4'>
          <InputGroup>
            <InputLeftAddon border='none'>{<AiFillCalendar size='30px' />}</InputLeftAddon>
            <Input type='text' placeholder='Description' onChange={(e) => setSearchDescription(e.target.value)} />
           
          </InputGroup>
          <InputGroup ml='10px'>
            <InputLeftAddon>{<HiUserCircle size='30px' />}</InputLeftAddon>
            <Input type='date' placeholder='description'  onChange={(e) => setSearchResults(e.target.value)}></Input>
           

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
                <Th>Date</Th>
                <Th >Description</Th>
                {/* <Th>Address</Th> */}
                <Th>Price</Th>
                <Th>Quantity</Th>
  
              </Tr>
            </Thead>
            {data.filter((data) => {
  if (searchResults == "") {
    return data
  }else if (data.date.toLowerCase().includes(searchResults.toLowerCase()))
    return data
  
  
}).filter((data) => {
  if (searchDescription == "") {
    return data
  }else if (data.description.toLowerCase().includes(searchDescription.toLowerCase()))
    return data
  
  
}).map(id => {
        return(
          <>
            <Tbody>
              <Tr>
                <Td>{id.productId}</Td>
                <Td>{id.date}</Td>
                <Td >{id.description}</Td>
                <Td>$: {id.price}</Td>
                <Td>{id.quantity}</Td>
               
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
             <Button w='100%' bg='none' hover={{bg:'none'}} >Edit</Button>
            </MenuItem>
            <MenuItem>
            <Button w='100%' bg='none' hover={{bg:'none'}} onClick={() => deleteUser(id._id, id.description)}>Delete</Button>
            </MenuItem>
    
        </MenuList>
      </Menu></Td>
              </Tr>
             
              
            </Tbody>
            
            </>
           )
          })}
          </Table>
        </TableContainer>
        
       
        <Heading>Total Personal Expense: $ {data.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)}</Heading>
       
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
       
     <ToastContainer/>
      
</>
  )
}

export default TotalPersonalExpense