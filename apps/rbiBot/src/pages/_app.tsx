import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { ReactElement, useEffect, useState } from 'react';
import 'chatui/dist/index.css';
import { Toaster } from 'react-hot-toast';

// import flagsmith from 'flagsmith/isomorphic';
// import { FlagsmithProvider } from 'flagsmith/react';

function SafeHydrate({ children }: { children: ReactElement }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <ChakraProvider>
    
          <div style={{ height: '100%' }}>
            <Toaster position="top-center" reverseOrder={false} />
            <SafeHydrate>
              <Component {...pageProps} />
            </SafeHydrate>
          </div>
      {/* </FlagsmithProvider> */}
    </ChakraProvider>
  );
};

export default App;

