import React from 'react'
import { Button, ListItem, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalContent, ModalOverlay, ModalHeader, Divider, Box, OrderedList, Heading, Spacer, Flex, Text} from '@chakra-ui/react'
import EditStudent from './EditStudent';
export default function StudentList() {
    

    const students = [
        {
            id: 1,
            name: 'harshith',
            room: 3,
            status: false,
            btn: useDisclosure(),
        },
        {
            id: 2,
            name: 'Nanu',
            room: 4,
            status: true,
            btn: useDisclosure(),
        },
        {
            id: 3,
            name: 'ninu',
            room: 1,
            status: false,
            btn: useDisclosure(),
        },
    ];

    const listItems = students.map(student => {
        return(
            <Box p={5} mt={5} marginRight={5} bg={'gray.300'} borderRadius={5} border={'2px'} borderColor={'green.200'}  key={student.id} >
                <ListItem>
                    <Flex>
                        <Text fontSize={'2xl'}>{student.name}</Text>
                        <Spacer/>
                        <Button onClick={student.btn.onOpen} colorScheme='green' alignSelf={'end'}>View More</Button>                    
                        
                    </Flex>
                    
                    <Modal isOpen={student.btn.isOpen} onClose={student.btn.onClose}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Student details</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <p>Name: {student.name}   </p>  
                            <p>Room no: {student.room}</p>        
                            <p>Fees: {student.status ? 'paid': 'due'}</p>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={student.btn.onClose}>
                                Close
                            </Button>
                            <EditStudent/>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                </ListItem>
            
            </Box>
        )
        
    })

    const name1 = 'he';
    const name2 = 'she';
  return (
    <>
        <Heading>Student List</Heading>
        <OrderedList>
            {listItems}
        </OrderedList>
    </>
  )
}
