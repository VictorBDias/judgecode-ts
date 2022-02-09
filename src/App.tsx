import React from 'react';
// import 'dotenv/config';
import { ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './shared/routes/index';

// import 'bootstrap/dist/css/bootstrap.min.css';

// CUSTOM IMPORTS
// import history from './services/history';

function App() {
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
