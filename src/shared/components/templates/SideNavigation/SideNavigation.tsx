import React, { ReactNode, ReactText, useEffect } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { useAuth } from 'layers/auth/contexts';
import { Typography } from '../../atoms';

interface NavItemProps extends FlexProps {
  children: ReactText;
}
interface MobileProps extends FlexProps {
  onOpen: () => void;
}
function SideNavigation({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const navigate = useNavigate();
  const { handleSignOut } = useAuth();

  return (
    <Box
      bg="nav"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        marginTop="24px"
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <Text
          fontSize="3xl"
          fontFamily="monospace"
          fontWeight="bold"
          color="white"
        >
          JudgeCode
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <div
        onClick={() => navigate('/forms')}
        style={{ textDecoration: 'none' }}
        onKeyPress={() => navigate('/forms')}
        role="button"
        tabIndex={0}
      >
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
          <Typography>Formulários</Typography>
        </Flex>
      </div>

      <div
        onClick={() => navigate('/question-bank')}
        style={{ textDecoration: 'none' }}
        onKeyPress={() => navigate('/question-bank')}
        role="button"
        tabIndex={0}
      >
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
          <Typography>Banco de questões</Typography>
        </Flex>
      </div>
      <div
        onClick={handleSignOut}
        style={{ textDecoration: 'none' }}
        onKeyPress={handleSignOut}
        role="button"
        tabIndex={0}
      >
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
          <Typography>Sair</Typography>
        </Flex>
      </div>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => (
  <Flex
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 24 }}
    height="20"
    alignItems="center"
    bg="nav"
    justifyContent="flex-start"
    {...rest}
  >
    <IconButton
      variant="unstyled"
      color="white"
      onClick={onOpen}
      aria-label="open menu"
      icon={<FiMenu />}
    />

    <Text
      fontSize="2xl"
      fontFamily="monospace"
      fontWeight="bold"
      color="white"
      marginLeft={4}
    >
      JudgeCode
    </Text>
  </Flex>
);

export { SideNavigation };
