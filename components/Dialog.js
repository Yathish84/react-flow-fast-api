import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
export default function Dialog({isOpen ,onClose , title, desc , children}) {
    // const { onOpenChange} = useDisclosure();
  return (
    <>
        <Modal 
            backdrop="opaque" 
            isOpen={isOpen} 
            onClose={onClose}
            scrollBehavior='inside'
            size='lg'
            // onOpenChange={onOpenChange}
            classNames={{
              // base:'w-4/5',
             
            // backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
            }}
      >
        <ModalContent>
          {/* {(onClose) => ( */}
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">{title}</ModalHeader>
              <p className=' px-6 text-center'>{desc}</p>
              <ModalBody>
                {children}
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          {/* )} */}
        </ModalContent>
      </Modal>
    </>
  )
}
