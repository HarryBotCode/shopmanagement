import { Button, Flex, Input ,Text, FormControl} from '@chakra-ui/react'
import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    
    e.preventDefault();

    const req = await fetch ('http://localhost:1337/api/register', {
     
      method:"POST",
      headers:{"Content-Type":"application/json", "Accept": "application/json"},
      body: await JSON.stringify({
        name,
        email, 
        password,
      }),
    });
  
    const data = await req.json();
    if (data.status == "ok"){
      navigate("/");
    }
    else {
      alert("UserName or Email already taken")
    }
  };

  return (
    (
      <Flex
      bg='#2148c0'
      h='100vh'
      justifyContent='center'
      alignItems='center'>
       <Flex
       flexDir='column'
       alignItems='center'
       >
        <form onSubmit={handleRegister}>
          <FormControl>
            
            <Input 
                type='text' 
                bg='white' 
                placeholder='Username'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
          </FormControl>
           
          <FormControl>

                  <Input 
                mt='20px' 
                type='Email' 
                bg='white' 
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
           />
          </FormControl>

           
          <FormControl>
                <Input 
              mt='20px' 
              type='Password' 
              bg='white' 
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </FormControl>

          
           <Button type='submit'  mt='20px' w='100%' bg='white' color='#2148c0' _hover={{bg:'#2f1893', color:'white'}}>Register </Button>
           <Text mt='20px' color='white' _hover={{color:'#2f1893'}}><Link to="/"  >Already have an account? Sign in</Link></Text>
           </form>
       </Flex>
   
      </Flex>
     )
  )
}

export default Register