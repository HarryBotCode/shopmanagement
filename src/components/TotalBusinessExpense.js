import { React, useState, useEffect } from 'react'
import { Button, Flex, Heading, IconButton, Input, InputGroup, InputLeftAddon, InputRightAddon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { AiFillCalendar, AiFillFilePdf } from 'react-icons/ai'
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

const TotalBusinessExpense = ({ setBusinessExpenses, setExpenses, setPersonalExpenses }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/getBusiness", {
      method: "GET",

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

        <Button onClick={() => setBusinessExpenses(true) & setExpenses(false) & setPersonalExpenses(false)} w='85%' leftIcon={<AiFillFilePdf color='white' />} rounded='2xl' bg='#0066ff' color='white' _hover={{ transform: 'Scale(1.03)' }}>Add Business Expense</Button>
      </Flex>
      <Flex flexDir='column' justifyContent='space-between'>
          <form>
        <Flex flexDir='row' p='4'>
          <InputGroup>
            <InputLeftAddon border='none'>{<AiFillCalendar size='30px' />}</InputLeftAddon>
            <Input type='date' placeholder='Search by date'  />
            <InputRightAddon  bg='none'><BsSearch /></InputRightAddon>
          </InputGroup>
          <InputGroup ml='10px'>
            <InputLeftAddon>{<HiUserCircle size='30px' />}</InputLeftAddon>
            <Input type='text' placeholder='ID' value={searchTerm} onChange={(e) => setSearchResults(e.target.value)}></Input>
            <InputRightAddon as="Button" type='submit' bg='none'><BsSearch /></InputRightAddon>

          </InputGroup>
        </Flex>
          </form>

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
            {/* {searchResults.map((item) => {
              return (
       
      )})} */}
{data.filter((data) => {
  if (searchTerm == ""){
    return data
  }else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())){
    return data
  }
    
  
})
           .map(id => {
              return (

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
                        _hover={{ bg: 'none' }}
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

export default TotalBusinessExpense