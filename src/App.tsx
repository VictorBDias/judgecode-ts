import React from 'react';
// import 'dotenv/config';
import { ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './shared/routes/index';
import { theme } from './styles/themes';
// import 'bootstrap/dist/css/bootstrap.min.css';

// CUSTOM IMPORTS
// import history from './services/history';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
