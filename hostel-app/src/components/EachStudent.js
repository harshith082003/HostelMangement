import React, {  useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Box, Heading, Card, CardBody, CardHeader, Stack, StackDivider, Button, HStack, useToast, Badge } from '@chakra-ui/react'
import StudentField from './StudentField';
import EditStudent from './EditStudent';
import VacateAlert from './VacateAlert';

export default function EachStudent() {

    const[student, setStudent] = useState({});

    const { id } = useParams();
    

    useEffect(() => {
        axios
        .get(`http://localhost:8082/api/students/${id}`)
        .then((res) => {
          setStudent(res.data);
        })
        .catch((err) => {
          console.log('Error from Student details', err.message);
        });
      }, [id]);


      
  return (
    <Box>
      <Card>
        <CardHeader>
          <Heading size='2xl'>{student.name}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <StudentField field={'Room Number'} data = {student.room}/>
            <StudentField field={'DOB'} data = {student.dob}/>
            <StudentField field={'Phone No'} data = {student.phNo}/>
            <StudentField field={'Department'} data = {student.department}/>
            <Box>
                <Heading size='md' >
                    Fee Status
                </Heading>
                {student.feeStatus ?
                    <Badge mt={3} fontSize='lg' colorScheme='green' variant={'solid'}>
                        Paid
                    </Badge>
                    :
                    <Badge mt={3} fontSize='lg' colorScheme='red' variant={'solid'}>
                        Due
                    </Badge>
                }
                
            </Box>          
          </Stack>
        </CardBody>
      </Card>
      <HStack m={5}>
        <EditStudent/>
        <VacateAlert student = {student} />

        <Link to={'/'}>
          <Button colorScheme='red' marginLeft={10} variant={'outline'}>Close</Button>
        </Link>
        
      </HStack>
      
    </Box>
    
  )
}
