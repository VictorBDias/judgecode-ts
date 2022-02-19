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

function SideNavigation({ children }: { children: ReactNode }) {
  const { isOpen, onClose } = useDisclosure();
  return (
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
      <Text fontSize="3xl" fontFamily="monospace" fontWeight="bold" color="white">
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
      p="6"
      role="group"
      cursor="pointer"
      color="white"
      _hover={{
        bg: 'primary',
      }}
      {...rest}
    >
      {children}
    </Flex>
  </Link>
);

export { SideNavigation };
