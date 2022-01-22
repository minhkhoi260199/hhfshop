import '../styles/navBar.css'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

import Layout from '../components/layout/Layout'

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
