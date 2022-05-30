import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/space-mono/700.css';
import { extendTheme, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    heading: `'Space Mono', 'sans-serif'`
  }
};

const theme = extendTheme({ config });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Auth0ProviderWithHistory>
      <ChakraProvider resetCSS={true} theme={theme}>
        <React.StrictMode>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </Auth0ProviderWithHistory>
  </Router>
);
