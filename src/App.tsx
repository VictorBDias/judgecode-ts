import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from 'layers/auth/contexts';
import { AppRoutes } from './shared/routes/index';
import { theme } from './styles/themes';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
