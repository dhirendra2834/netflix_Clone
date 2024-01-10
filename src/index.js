import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom'
const Root=ReactDOM.createRoot(document.getElementById('root')
)
Root.render(
  
  
   <BrowserRouter> 
     <ChakraProvider>
        <App />
      </ChakraProvider>
      </BrowserRouter>
    
    

)  
