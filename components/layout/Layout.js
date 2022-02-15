import { Grid, GridItem } from "@chakra-ui/react";
import Footer from "./footer/Footer";
import NavBar from "./navBar/NavBar";
import Slider from "./slider/Slider";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
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
      <Footer />
    </>
  );
}
