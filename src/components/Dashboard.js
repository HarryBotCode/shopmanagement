import { Card, CardBody, CardHeader, Flex, Heading, HStack} from '@chakra-ui/react'
import React from 'react'
import {FcMoneyTransfer} from 'react-icons/fc'
import {GiExpense} from 'react-icons/gi'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {BsBarChartFill} from 'react-icons/bs'
import {MdInventory} from 'react-icons/md'


const Dashboard = ({setTotalinv, setTotalPersonalExpenses, setTotalBusinessExpenses, setSales}) => {
  return (
    <>
    <Flex
    bg='#fafafa'
    flexDir='column'
    p='6'
    h='50vh'
    justifyContent='flex-start'>
       
     
    
     <Flex
     p='8'
      
     justifyContent='space-around' 
     flexDir='row'>
      <Card as='button' onClick={() => setTotalinv(true) } transitionDuration='.2s' _hover={{bg:'#482be7', color:'white', transform:'scale(1.05)', transitionDuration:'.2s'}}  w='400px'>
       <CardHeader>
       <Heading size='md' fontWeight='normal'>Total Products</Heading>
       </CardHeader>
       <CardBody>
        <HStack justifyContent='space-between'>
        <MdInventory size='45px'/>
        <Heading>1,200</Heading>
        </HStack>       
        </CardBody>
      </Card>
      <Card as='button' onClick={() => setSales(true)} transitionDuration='.2s' _hover={{bg:'#482be7', color:'white', transform:'scale(1.05)', transitionDuration:'.2s'}}  w='400px'>
       <CardHeader>
       <Heading size='md' fontWeight='normal'>Total Sale</Heading>
       </CardHeader>
       <CardBody>
        <HStack justifyContent='space-between'>
        <BsBarChartFill size='45px'/>
        <Heading>1,200</Heading></HStack>       
        </CardBody>
      </Card>
     </Flex>
     <Flex
     p='8'
      
     justifyContent='space-around' 
     flexDir='row'>
      <Card as='button' onClick={() => setTotalPersonalExpenses(true)} transitionDuration='.2s' _hover={{bg:'#482be7', color:'white', transform:'scale(1.05)', transitionDuration:'.2s'}} w='400px'>
       <CardHeader>
       <Heading size='md' fontWeight='normal'>Personal Expense</Heading>
       </CardHeader>
       <CardBody>
        <HStack justifyContent='space-between'>
        <GiExpense size='45px'/>
        <Heading>1,200</Heading></HStack>       
        </CardBody>
      </Card>
      <Card as='button' onClick={() => setTotalBusinessExpenses(true)} transitionDuration='.2s' _hover={{bg:'#482be7', color:'white', transform:'scale(1.05)', transitionDuration:'.2s'}}  w='400px'>
       <CardHeader>
       <Heading size='md' fontWeight='normal'>Business Expense</Heading>
       </CardHeader>
       <CardBody>
        <HStack justifyContent='space-between'>
        <MdProductionQuantityLimits size='45px'/>
        <Heading>1,200</Heading></HStack>       
        </CardBody>
      </Card>
     </Flex>
     {/* <Flex
     p='8'
     justifyContent='space-around' 
     flexDir='column'>
      <Card w='100%'>
      <CardBody>
       <Flex flexDir='column' >
       <Flex justifyContent='space-between' p='2' flexDir='row'>
        <Text fontWeight='normal' w='100px' textAlign='start'>Invoice Name</Text>
        <Text fontWeight='normal' w='100px' textAlign='start'>Client Name</Text>
        <Text fontWeight='normal' w='100px' textAlign='start'>Status</Text>
        <Text fontWeight='normal' w='100px' textAlign='start'>Amount</Text>
        <Text fontWeight='normal' w='100px' textAlign='start'>Action</Text>
       </Flex>
      
       
       <Flex justifyContent='space-between' flexDir='row' p='2'>
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
            variant='outline'
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
       </Flex>  
        </CardBody>
      </Card>
      <Divider/>

      
      <Card w='100%'>
       <CardHeader>
       <Heading size='md' fontWeight='normal'>Total Clients</Heading>
       </CardHeader>
       <CardBody>
        <HStack justifyContent='space-between'>
        <FcMoneyTransfer size='45px'/>
        <Heading>1,200</Heading></HStack>       
        </CardBody>
      </Card>
     </Flex> */}
     </Flex>
    </>
  )
}

export default Dashboard