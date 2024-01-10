import React from 'react'
import { useState } from 'react'

import { Stack, HStack, VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, Show } from '@chakra-ui/react'

export default function Login() {

  const [show, setShow] = useState(false)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleClick = () => setShow(!show)

  const submitHandler = () => { }
  return (
    <VStack>
           {/* Email */}
           <FormControl id="email" isRequired>
                <FormLabel >Email</FormLabel>
                <Input placeholder='Enter Your Name' onChange={(e) => setEmail(e.target.value)} />
            </FormControl>

      {/* passowrd */}
      <FormControl id="password" isRequired>
        <FormLabel >Password</FormLabel>
        <InputGroup>
          <Input type={show ? "text" : "password"} placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
          <InputRightElement>
            <Button h="1.75rem" size="sm" onClick={handleClick}>{show ? "Hide" : "show"}</Button>
          </InputRightElement>
        </InputGroup>

      </FormControl>

      <Button colorScheme='blue' width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler} >Login</Button>

<Button colorScheme='red' width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler} >Get Guest user Credentials</Button>

    </VStack>
  )
}
