import React, { useState } from 'react';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerHeader, DrawerContent, DrawerOverlay, useDisclosure, DrawerFooter, Input, FormControl, FormLabel } from '@chakra-ui/react';

export default function EditStudent() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();

    const[phNo, setPhNo] = useState();
    const[roomNo, setRoomNo] = useState();
    const[name, setName] = useState();
    const[dob, setDob] = useState();

    const handleEdit = () => {
        console.log(name, roomNo, phNo, dob);
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
                        value={roomNo || ''}
                        onChange={e => setRoomNo(e.target.value)}
                        size={'lg'}
                        type='number'
                        placeholder='Enter new room no' 
                        variant={'filled'} 
                        width={'80'}
                        />
                    </FormControl>
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
