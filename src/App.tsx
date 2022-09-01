import React from 'react';
// import 'dotenv/config';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from 'layers/auth/contexts';
import { AppRoutes } from './shared/routes/index';
import { theme } from './styles/themes';
// import 'bootstrap/dist/css/bootstrap.min.css';

// CUSTOM IMPORTS
// import history from './services/history';

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
