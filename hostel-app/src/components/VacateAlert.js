import React from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalContent, ModalOverlay, useToast, Text, useDisclosure, ModalHeader, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function VacateAlert({ student }) {

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const [overlay, setOverlay] = React.useState(<OverlayOne />);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const toast = useToast();

    
      const handleVacate = (id) => {
        if(student.feeStatus == 1){
          axios
            .delete(`http://localhost:8082/api/students/${id}`)
            .then((res) => {
              navigate('/');
            })
            .catch((err) => {
              console.log('Error form ShowBookDetails_deleteClick');
            });

            toast({
              position: 'top',
              title: `${student.name} vacated.`,
              status: 'warning',
              duration: 5000,
              isClosable: true,
          })
        }

        else {
          toast({
            position: 'top',
            title: `Cannot vacate Student.`,
            description: 'student fees still due',
            status: 'warning',
            duration: 5000,
            isClosable: true,
        })
        }
      };

    
  return (
    <div>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
          
        }}
        colorScheme='red'
        ml={10}
      >Vacate</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Vacate??</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to vacate {student.name}!!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme='green'>Close</Button>
            <Spacer/>
            <Button onClick = {() => handleVacate(student._id)} colorScheme='red' variant={'outline'}>Vacate</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
