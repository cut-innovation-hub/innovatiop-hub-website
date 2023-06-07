/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type Props = {
    heading:string,
    body: string,
    loading: boolean,
    action_button: ReactNode,
    isOpen:boolean,
    onOpen?:() => void
    onClose:any
};

const NewsModal = (props: Props) => {
  // @ts-ignore
  return (

      <Modal isCentered isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           {props.body}
          </ModalBody>
          <ModalFooter>
            <Button variant={'ghost'} mr={3} onClick={props.onClose}>
              Close
            </Button>
            {props.action_button}
          </ModalFooter>
        </ModalContent>
      </Modal>
  );
};

export default NewsModal;
