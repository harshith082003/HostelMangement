import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Center, Heading, Spacer, Text, Flex, List, Badge, Divider, OrderedList, HStack, Th, Tr, Td,TableContainer, Table, Thead, Tbody, AbsoluteCenter, useToast} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

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
        
          <Tr key={student.id}>
            <Td fontSize={'2xl'}>{student.name}</Td>
            <Td fontSize={'2xl'}>{student.room}</Td>
            <Td>
              {student.feeStatus ?
                <Badge mt={3} fontSize='lg' colorScheme='green' variant={'solid'}>
                    Paid
                </Badge>
                :
                <Badge mt={3} fontSize='lg' colorScheme='red' variant={'solid'}>
                    Due
                </Badge>
              }
            </Td>
            <Link to={`/eachStudent/${student._id}`}>
            <Button colorScheme='teal' mt={5} mr={5}>View</Button>
            </Link> 
          </Tr>                    
          
        )
        
    })

  return (
    <>
    <NavBar/>
      
      {students.length ?
      <TableContainer ml={5}>
        <Heading textAlign={'center'} m={10}>Student List</Heading>
        <Table size={'lg'}>
          <Thead>
          <Tr>
            <Th fontSize={'2xl'}>Name</Th>
            <Th fontSize={'2xl'}>Room No</Th>
            <Th fontSize={'2xl'}>Fee Status</Th>
          </Tr>
          </Thead>
          <Tbody>
            {listItems}
          </Tbody>
        </Table>
     
      </TableContainer>
      :
      <AbsoluteCenter>
        <Heading mt={500} fontSize={'6xl'}>
          LIST IS EMPTY
        </Heading>
        <Link to={'/'}>
          <Center>
            <Button size={'lg'} colorScheme='green' m={5}>
              Register Student
            </Button>
          </Center>            
        </Link>
        
      </AbsoluteCenter>
    }
      </>
  )
}
