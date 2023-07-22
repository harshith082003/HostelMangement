import React from 'react'
import { useState } from 'react';
import { Center, Input, VStack, FormControl, FormLabel, Button, Select, Heading } from '@chakra-ui/react'
export default function RegisterStudent() {

  const[phNo, setPhNo] = useState();
  const[name, setName] = useState();
  const[dob, setDob] = useState();
  const[depatment, setDepartment] = useState('ISE');

  const handleClick = () => {
    console.log(name, dob, depatment, phNo);
  }

  return (
      <Center mt={20}>
        <VStack spacing={5} border={'2px'} borderRadius={10} p = {5} borderColor={'blue.100'}>
          <Heading fontSize={40} textAlign={'center'}>Student Registeration</Heading>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input  
              value = {name || ''}
              onChange={e => setName(e.target.value)}
              display={'flex'}
              alignSelf={'center'}
              size={'lg'}
              placeholder='Enter your full name' 
              variant={'filled'} 
              width={'80'}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>DOB</FormLabel>
            <Input
              value={dob || ''}
              onChange={e => setDob(e.target.value)}
              size={'lg'}
              variant={'filled'} 
              width={'80'}
              placeholder="Select Date of birth"
              type="date"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Department</FormLabel>
            <Select 
              value={depatment}
              onChange={e => setDepartment(e.target.value)}
              variant={'filled'}
              size={'lg'}
              width={'80'}              
            >
              <option>ISE</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>CV</option>
              <option>MECH</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone No</FormLabel>
            <Input  
              value={phNo || ''}
              onChange={e => setPhNo(e.target.value)}
              size={'lg'}
              type='number'
              placeholder='Phone no' 
              variant={'filled'} 
              width={'80'}
            />
          </FormControl>
          <Button colorScheme='blue' onClick={handleClick}>Submit</Button>
        </VStack>
      </Center>
  )
}
