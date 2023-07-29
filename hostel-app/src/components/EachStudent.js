import React, {  useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {Box, Heading, Card, CardBody, CardHeader, Stack, StackDivider, Button, HStack, Spacer } from '@chakra-ui/react'
import StudentField from './StudentField';
import EditStudent from './EditStudent';

export default function EachStudent() {

    const[student, setStudent] = useState({});

    const { id } = useParams();
    // const navigate = useNavigate();

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
            <StudentField field={'Fee Status'} data = {student.feeStatus ? 'Paid' : 'Due'}/>
          </Stack>
        </CardBody>
      </Card>
      <HStack m={5}>
        <EditStudent/>
        <Link to={'/studentList'}>
          <Button colorScheme='red' marginLeft={10}>Close</Button>
        </Link>
        
      </HStack>
      
    </Box>
    
  )
}
