import { Box, Grid, GridItem } from "@chakra-ui/react";
import MessengerButton from "../MessengerButton";
import ScrollButton from "../ScrollButton";
import ZaloButton from "../ZaloButton";
import Footer from "./footer/Footer";
import NavBar from "./navBar/NavBar";
import Slider from "./slider/Slider";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {/* {children.type.name==='Home' && <Slider />} */}
      <Slider />
      <Grid templateColumns="repeat(20, 1fr)" margin="auto" maxW="1450px">
        <GridItem
          display={{ base: "none", md: "none", lg: "block" }}
          colSpan={{ base: "0", md: "0", lg: "1" }}
        >
          {/*Side banner 1*/}
        </GridItem>
        <GridItem
          colSpan={{ base: "20", md: "20", lg: "18" }}
          bg="#f9f9f7"
          p={4}
          textColor="#5f5438"
        >
          {children}
        </GridItem>
        <GridItem
          display={{ base: "none", md: "none", lg: "block" }}
          colSpan={{ base: "0", md: "0", lg: "1" }}
        >
          {/*Side banner 2*/}
        </GridItem>
      </Grid>
      <Box position='fixed' zIndex={1} right='10px' bottom={{ base: "95px", md: "15px" }}
      >
        <ScrollButton />
        {/* <ZaloButton /> <br/>
        <MessengerButton /> */}
      </Box>
      <Footer />
    </>
  );
}
