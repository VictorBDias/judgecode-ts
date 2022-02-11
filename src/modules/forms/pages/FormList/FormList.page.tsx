// import React from 'react';

// // import { Button } from '../../../../shared/components/atoms';

// // // CUSTOM IMPORTS

// // const FormList = () => <Button>FormList</Button >;

// // export { FormList };

// import {
//   FormControl, FormLabel, Input as ChakraInput, InputProps,
// } from '@chakra-ui/react';

// interface IInputProps extends InputProps {
//   label: string;
//   name: string;
// }

// export function FormList({ label, name, ...rest }: IInputProps) {
//   return (
//     <FormControl>
//       {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
//       <ChakraInput
//         name={name}
//         focusBorderColor="pink.500"
//         bgColor="gray.900"
//         variant="filled"
//         {...rest}
//       />
//     </FormControl>

//   );
// }

import React, { ReactNode, ReactText } from 'react';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';

interface LinkItemProps {
  name: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Meus formulários' },
  { name: 'Banco de questões' },
];

function FormList({ children }: { children: ReactNode }) {
  const { isOpen, onClose } = useDisclosure();
  return (
    // bg={useColorModeValue('gray.100', 'gray.900')}
    <Box minH="100vh" bg="background">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => (
  <Box
    bg="nav"
    borderRight="1px"
    borderRightColor={useColorModeValue('gray.200', 'gray.700')}
    w={{ base: 'full', md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
  >
    <Flex marginTop="24px" h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" bg="white">
        JudgeCode
      </Text>
      <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
    </Flex>
    {LinkItems.map((link) => (
      <NavItem key={link.name}>
        {link.name}
      </NavItem>
    ))}
  </Box>
);

interface NavItemProps extends FlexProps {
  children: ReactText;
}
const NavItem = ({ children, ...rest }: NavItemProps) => (
  <Link href="https://chakra-templates.dev/navigation/sidebar" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: 'cyan.400',
        color: 'white',
      }}
      {...rest}
    >
      {children}
    </Flex>
  </Link>
);

export { FormList };
