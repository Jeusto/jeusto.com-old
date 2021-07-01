import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FiMessageCircle } from "react-icons/fi";

export default function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        bg="buttonBackground"
        width="4rem"
        height="4rem"
        fontSize="2rem"
        borderRadius="999rem"
        aria-label="Project repo"
        position="fixed"
        bottom="2.5rem"
        right="2.5rem"
        icon={<FiMessageCircle />}
      />
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent bg="background">
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
              cupiditate!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
