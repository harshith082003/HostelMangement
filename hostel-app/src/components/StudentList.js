import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, ListItem, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalContent, ModalOverlay, ModalHeader, Divider, Box, OrderedList, Heading, Spacer, Flex, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
export default function StudentList() {
    

    const[students, setStudents] = useState([]);

    useEffect(() => {
        axios
          .get('http://localhost:8082/api/students')
          .then((res) => {
            setStudents(res.data);
          })
          .catch((err) => {
            console.log('Error from StudentList: ', err.message);
          });
      }, []);
        

    const listItems = students.map(student => {

        return(
            <Box p={5} mt={5} marginRight={5} bg={'gray.300'} borderRadius={5} border={'2px'} borderColor={'green.200'}  key={student._id} >
                <ListItem>
                  <Link to={`/eachStudent/${student._id}`}>
                    <Flex>
                      <Text fontSize={'2xl'}>{student.name}</Text>
                    </Flex>
                  </Link>
                </ListItem>
            </Box>
        )
        
    })

  return (
    <>
        <Heading textAlign={'center'} m={10}>Student List</Heading>
        <OrderedList>
            {listItems}
        </OrderedList>
    </>
  )
}
