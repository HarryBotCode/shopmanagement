import {React, useState, useEffect} from 'react'
import { Button, Flex, IconButton, Input, InputGroup, InputRightAddon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { AiFillCalendar, AiFillFilePdf } from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import { SlOptions } from 'react-icons/sl'
import { BsSearch } from 'react-icons/bs'
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

  useEffect(() => {
    fetch ("http://localhost:1337/getPersonal", {
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
    justifyContent='center'
    alignItems='center'
    p='5' >
    
    <Button onClick={() => setPersonalExpenses(true) & setExpenses(false) & setBusinessExpenses(false)} w='85%' leftIcon={<AiFillFilePdf color='white'/>}  rounded='2xl' bg='#0066ff' color='white' _hover={{transform:'Scale(1.03)'}}>Add Personal Expense</Button>
        </Flex>
        <Flex flexDir='column' justifyContent='space-between'>
            <Flex flexDir='row' p='4'>
                <IconButton icon={<AiFillCalendar size='30px'/> } border='none'></IconButton>
                <Input type='date' placeholder='Search by date' ml='10px'/>
                <IconButton  ml='30px' icon={<HiUserCircle size='30px'/>}></IconButton>
                <InputGroup >
                <Input type='text' placeholder='Description'  ml='10px' inputRightAddon={<BsSearch/>}></Input>
                  <InputRightAddon bg='none'><BsSearch/></InputRightAddon>
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
            {data.map(id => {
        return(
          
            <Tbody>
              <Tr>
                <Td>{id.productId}</Td>
                <Td>{id.date}</Td>
                <Td >{id.description}</Td>
                {/* <Td>{id.address}</Td> */}
                <Td>{id.price}</Td>
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

export default TotalPersonalExpense