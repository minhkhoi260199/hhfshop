import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./navBar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Grid templateColumns="repeat(10, 1fr)" margin="auto" maxW="1450px">
        <GridItem
          display={{ base: "none", md: "none", lg: "block" }}
          colSpan={{ base: "0", md: "0", lg: "1" }}
        >
          {/*Side banner 1*/}
        </GridItem>
        <GridItem
          colSpan={{ base: "10", md: "10", lg: "8" }}
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
    </>
  );
}
