import { createBreakpoints } from '@chakra-ui/theme-tools'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import { Provider } from 'react-redux';

import store from '../store/store'
import Layout from '../components/layout/Layout'
import '../styles/navBar.css'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})
const theme = extendTheme({ breakpoints })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
