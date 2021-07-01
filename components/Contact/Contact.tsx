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
  Heading,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FiMessageCircle } from "react-icons/fi";

export default function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        variant="ghost2"
        width="4rem"
        height="4rem"
        fontSize="2rem"
        borderRadius="999rem"
        aria-label="Project repo"
        position="fixed"
        bottom="1.5rem"
        right="1.5rem"
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
          <ModalHeader>
            <Heading className="gradient_text1" fontSize="display2">
              Contact me
            </Heading>
          </ModalHeader>
          <ModalCloseButton variant="ghost" />
          <ModalBody>
            <VStack>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="name" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="subject">
                <FormLabel>Subject</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="" size="sm" />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="ghost">
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
