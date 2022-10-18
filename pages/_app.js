import React from 'react';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1031129740637357');
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FacebookPixel />
      <ThemeProvider theme={theme}>
        <Toaster position="bottom-right" />
        <Component {...pageProps} />    
      </ThemeProvider>
    </>
  )
}

export default MyApp
