import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />    
    </ThemeProvider>
  )
}

export default MyApp
