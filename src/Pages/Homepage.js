import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../Components/Authenication/Login'
import Signup from '../Components/Authenication/Signup'

export default function Homepage() {
  return (
    <Container maxW='xl' centerContent >

      <Box
        d="flex"
        justifyContent="center"
        p="3"
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="work sans" color="black" textAlign="center" fontWeight="800">Who are You </Text>

      </Box>
      <Box bg='white' w="100%" p="4" color="black" borderRadius="lg" borderWidth="1px" >
        <Tabs variant='soft-rounded' >
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>  <Login /></TabPanel>
            <TabPanel> <Signup /> </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}
