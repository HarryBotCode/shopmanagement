import { Button, Flex, Heading, IconButton, Input, Text, HStack } from '@chakra-ui/react'
import { React, useState } from 'react'
import { AiFillEye, AiFillFilePdf, AiOutlineCheck, AiOutlineMinusCircle } from 'react-icons/ai'
import { FcPaid } from 'react-icons/fc'
import { FiDownload } from 'react-icons/fi'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdPaid } from 'react-icons/md'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { HiOutlineBadgeCheck } from 'react-icons/hi'



const BusinessExpense = ({ setExpenses, setSales, setInv, setTotalBusinessExpenses, setPersonalExpenses, setBusinessExpenses, saveData }) => {
    
   

    const [showComponent, setShowComponent] = useState("")

    const handleClick = () => {

        setShowComponent([...showComponent, <FormToAdd key={showComponent.length} saveData={saveData} onDelete={() => handleDelete(showComponent.length)}  />])
    };

    const handleDelete = (index) => {
        const newComponents = [...showComponent];
        newComponents.splice(index, 1);
        setShowComponent(newComponents);
    };
    

        

    const FormToAdd = () => {
        const [productId, setProductId] = useState("");
        const [date, setDate] = useState("");
        const [description, setDescription] = useState("");
        const [price, setPrice] = useState("");
        const [quantity, setQuantity] = useState("");
        const [buttonClicked, setButtonClicked] = useState(false);

     

        const saveData = async (e) => {
            e.preventDefault();
              alert("done")
              setButtonClicked(true);
             
               await fetch("http://localhost:1337/api/business", {
                   method: "POST",
                   headers: { "Content-Type": "application/json" },
                   body: await JSON.stringify({
                       productId,
                       date,
                       description,
                       price,
                       quantity,
                   })
               })
           }

        return (
            <> {!buttonClicked &&
                    <form onSubmit={saveData}>
                        
                        <Flex flexDir='row' mt='20px'>
                            <HStack spacing='10px'>
                                <Input
                                    w='150px'
                                    type='text'
                                    placeholder='ID'
                                    h='35px'
                                    rounded='md'
                                    border='1px'
                                    borderColor='#0066ff'
                                    value={productId}
                                    onChange={(e) => setProductId(e.target.value)}>
                                   
                                </Input>
            
                                <Input
                                    w='50%'
                                    mt='20px'
                                    type='date'
                                    placeholder='Date'
                                    h='35px'
                                    rounded='md'
                                    border='1px'
                                    borderColor='#0066ff'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}>
            
                                </Input>
                                <Input
                                    w='50%'
                                    mt='20px'
                                    type='description'
                                    placeholder='Description'
                                    h='35px'
                                    rounded='md'
                                    border='1px'
                                    borderColor='#0066ff'
                                     value={description}
                                    onChange={(e) => setDescription(e.target.value)}>
            
                                </Input>
            
                                <Input
                                    w='50%'
                                    mt='20px'
                                    type='Price'
                                    placeholder='Price'
                                    h='35px'
                                    rounded='md'
                                    border='1px'
                                    borderColor='#0066ff'
                                     value={price}
                                    onChange={(e) => setPrice(e.target.value)}>
            
                                </Input>
            
                                <Input
                                    w='50%'
                                    mt='20px'
                                    type='number'
                                    placeholder='Qty'
                                    h='35px'
                                    rounded='md'
                                    border='1px'
                                    borderColor='#0066ff'
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}>
                                </Input>
                            </HStack>
                             <Button type='submit'  h='40px' bg='none' textAlign='center' transitionDuration='.2s' _hover={{ transform: 'scale(1.5)', transitionDuration: '.2s', bg: 'none', color:'green' }} fontWeight='normal'> <HiOutlineBadgeCheck size='35px' /> </Button>
                        </Flex>
                        </form>  

                   
                       
                    }
                       
            </>
                )
    }
            
                          
            
    
            

    return (
        <>
            <Flex
                bg='#fafafa'
                p='6'
                justifyContent='flex-start'
                flexDir='column'>

                <Flex w='100%' flexDir='row' alignItems='center' rounded='md' bg='white' p='6' justifyContent='space-between' mt='20px'>
                    <IconButton onClick={() => setExpenses(false) & setPersonalExpenses(false) & setBusinessExpenses(false) & setTotalBusinessExpenses(true)} icon={<IoMdArrowRoundBack color='#0066ff' size='25px' />} ></IconButton>

                    <Button leftIcon={<AiFillEye />} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s' _hover={{ transform: 'scale(1.04)', transitionDuration: '.2s', bg: 'none' }} fontWeight='normal'>View Mode</Button>
                    <Button leftIcon={<IoSettingsSharp />} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s' _hover={{ transform: 'scale(1.04)', transitionDuration: '.2s', bg: 'none' }} fontWeight='normal'>Settings</Button>
                    <Button leftIcon={<AiFillFilePdf />} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s' _hover={{ transform: 'scale(1.04)', transitionDuration: '.2s', bg: 'none' }} fontWeight='normal'>Export PDF</Button>
                    <Button leftIcon={<FiDownload />} rounded='xl' border='1px' borderColor='#0066ff' h='30px' color='#0066ff' bg='transparent' textAlign='center' w='200px' transitionDuration='.2s' _hover={{ transform: 'scale(1.04)', transitionDuration: '.2s', bg: 'none' }} fontWeight='normal'>Download Image</Button>

                </Flex>
                <Flex flexDir='column' justifyContent='space-between' p='12'>
                    <Flex flexdir='row' justifyContent='space-between' alignItems='center'><Heading>Business Expense</Heading>
                        <Flex justifyContent='flex-end' flexDir='row'>
                        
                            <Button onClick={handleClick} bg='none' _hover={{ color: "#16a34a" }}><AiOutlinePlusCircle size='40px' /></Button>
                            <Button onClick={handleDelete} bg='none' _hover={{ color: "#f70000" }}><AiOutlineMinusCircle size='40px' /></Button>
                           
                        </Flex>
                    </Flex>

                    <Flex flexDir='row' mt='30px' alignItems='center' rounded='md' bg='#686de0' py='6' justifyContent='space-between' px={20} pl='15px' textAlign='flex-start'>
                        <Text  color='white' >Product ID</Text>
                        <Text  color='white'>Date</Text>
                        <Text  color='white' >Description</Text>
                        <Text  color='white'>Price</Text>
                        <Text color='white' textAlign='left'>Quantity</Text>

                    </Flex>

                    {showComponent }
                   
                </Flex>


               
            </Flex>



        </>
    )
}

export default BusinessExpense