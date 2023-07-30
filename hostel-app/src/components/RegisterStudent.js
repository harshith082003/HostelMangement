import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Center, Input, VStack, FormControl, FormLabel, Button, Select, Heading, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

export default function RegisterStudent() {

 
  const[phNo, setPhNo] = useState();
  const[name, setName] = useState();
  const[dob, setDob] = useState();
  const[department, setDepartment] = useState('ISE');
  const[room, setRoom] = useState();
  const[feeStatus, setFeeStatus] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  // const Room = require('../../../backend/models/Room');

  const handleSubmit = e => {
    console.log(name, dob, department, phNo, room, feeStatus);


    e.preventDefault();
    const newStudent = {
      name: name,
      dob: dob,
      phNo: phNo,
      department: department,
      room: room,
      feeStatus: true
    }

    axios
      .post('http://localhost:8082/api/students', newStudent)
      .then((res) => {
        setName('');
        setDob('');
        setDepartment('');
        setPhNo('');      
        setRoom();  
      })
      .catch((err) => {
        console.log(err.stack);
      });

      toast({
        title: 'Student registered.',
        description: `Student allocated to room no ${room}.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      setTimeout(navigate('/studentList'), 9000);      
  }

  return (
    <>
    <NavBar/>
      <Center mt={5}>
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
              value={department}
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
          <FormControl isRequired>
            <FormLabel>Room No</FormLabel>
            <Input  
              value={room || ''}
              onChange={e => setRoom(e.target.value)}
              size={'lg'}
              type='number'
              placeholder='Room no' 
              variant={'filled'} 
              width={'80'}
            />
          </FormControl>
          <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>
        </VStack>
      </Center>
      </>
  )
}
