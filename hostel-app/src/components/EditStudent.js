import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerHeader, DrawerContent, DrawerOverlay, useDisclosure, DrawerFooter, Input, FormControl, FormLabel, Radio, RadioGroup, Select, Stack, useToast } from '@chakra-ui/react';

export default function EditStudent() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();

    const[phNo, setPhNo] = useState();
    const[name, setName] = useState();
    const[dob, setDob] = useState();
    const[department, setDepartment] = useState('ISE');
    const[room, setRoom] = useState();
    const[feeStatus, setFeeStatus] = useState('0');
  

    const { id } = useParams();
    const navigate = useNavigate();
    const toast = useToast();
    
    const handleEdit = e => {
      if(!(name || dob || phNo || department || room)){
        navigate('/');
      }

      else{
        e.preventDefault();

        const editededStudent = {
        name: name,
        dob: dob,
        phNo: phNo,
        department: department,
        room: room,
        feeStatus: feeStatus == '0' ? false : true
      }

      axios
      .put(`http://localhost:8082/api/students/${id}`, editededStudent)
      .then((res) => {
        navigate(`/studentList`);
      })
      .catch((err) => {
        console.log('Error in UpdateBookInfo!');
      });

      toast({
        position: 'top',
        title: `${name}'s info updated.`,
        status: 'info',
        duration: 5000,
        isClosable: true,
      })

      setTimeout(() => {navigate('/')}, 500);
      }
      
    }

    return (
        <>
          <Button colorScheme='yellow' onClick={onOpen}>
            Edit
          </Button>
         
          <Drawer
            isOpen={isOpen}
            placement='right'
            initialFocusRef={firstField}
            onClose={onClose}
            size={'sm'}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth='1px'>
                Edit Student Details
              </DrawerHeader>
              <DrawerBody alignContent={'center'}>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input  
                        value = {name || ''}
                        onChange={e => setName(e.target.value)}
                        display={'flex'}
                        alignSelf={'center'}
                        size={'lg'}
                        placeholder='Enter new full name' 
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
                        placeholder='Enter new phone no' 
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
                        placeholder='Enter new room no' 
                        variant={'filled'} 
                        width={'80'}
                        />
                    </FormControl>
                    <RadioGroup defaultValue={feeStatus} onChange={setFeeStatus}>
                      <Stack spacing={5} direction='row'>
                        <Radio colorScheme='red' value='0'>
                          Due
                        </Radio>
                        <Radio colorScheme='green' value='1'>
                          Paid
                        </Radio>
                      </Stack>
                    </RadioGroup>
              </DrawerBody>
              
              <DrawerFooter borderTopWidth='1px'>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue' onClick={handleEdit}>Submit</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )
}
