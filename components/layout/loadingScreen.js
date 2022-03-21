import { Box, Text, Spinner } from "@chakra-ui/react"
import Image from "next/image"

function LoadingScreen() {
  return (
    // <div style={{position:'relative', width:'100%', height:'100vh'}}>
    //     <div style={{position:'absolute',top:'40%',left:'45%'}}>
    <>
      <Box fontWeight={"bold"} mb={2}>
        <Text size={'xxl'} textAlign="center" >FRUITS !!!...  ASSEMBLE !</Text> 
        <Text size={'lg'} textAlign="center" >Loading... <Spinner size='md' color="pink" /> </Text>
      </Box>
      <hr/>
      <Box textAlign={"center"}>
        <Image src="/loadingImage.gif" alt="me" width="150" height="150" />
        <Image src="/loadingImage.gif" alt="me" width="150" height="150" />
        <Image src="/loadingImage.gif" alt="me" width="150" height="150" />
        <Image src="/loadingImage.gif" alt="me" width="150" height="150" />
        <Image src="/loadingImage.gif" alt="me" width="150" height="150" />
      </Box>
    </>
  )
}
export default LoadingScreen