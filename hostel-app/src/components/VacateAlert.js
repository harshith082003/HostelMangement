import React from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalContent, ModalOverlay } from '@chakra-ui/react'
export default function VacateAlert() {

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
  return (
    <div>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
          
        }}
        colorScheme='red'
      >Vacate</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Custom backdrop filters!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
