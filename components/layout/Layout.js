import { Box, Grid, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectLoginModalFlag, selectRegisterModalFlag, selectUserInfoModalFlag } from "../auth/authSlice";
import { LoginModal } from "../auth/LoginModal";
import { RegisterModal } from "../auth/RegisterModal";
import { UserInfoModal } from "../auth/userInfoModal";
import { HistoryDetailModal } from "../histories/HistoryDetailModal";
import { selectHistoryDetailModalFlag, selectHistoryModalFlag } from "../histories/historySlice";
import { ShoppingHistoryModal } from "../histories/ShoppingHistoryModal";
import MessengerButton from "../MessengerButton";
import { selectSliderFlag } from "../productDetail/detailSlice";
import ScrollButton from "../ScrollButton";
import ZaloButton from "../ZaloButton";
import Footer from "./footer/Footer";
import NavBar from "./navBar/NavBar";
import Slider from "./slider/Slider";

export default function Layout({ children }) {

  const isOpenRegisterModal = useSelector(selectRegisterModalFlag);
  const isOpenLoginModal = useSelector(selectLoginModalFlag);
  const isOpenUserInfoModal = useSelector(selectUserInfoModalFlag);
  const isOpenHistoryModal = useSelector(selectHistoryModalFlag);
  const isOpenHistoryDetailModal = useSelector(selectHistoryDetailModalFlag);

  const idUseSlider = useSelector(selectSliderFlag);

  return (
    <>
      <Head>
        <title>Hiệp hoà farm</title>
        <meta name="description" content="Mang nông sản sạch đến ngôi nhà của bạn" />
        <link rel="shortcut icon" href="https://www.hiephoafarm.com/LogoHHF.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      {/* {console.log("dataChild:<"+children.type.name+">")} */}
      {/* lên production lỗi */}
      {/* {children.type.name.toString()=='le' && <Slider />} */}
      {idUseSlider && <Slider />}
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
      {isOpenRegisterModal && <RegisterModal/>}
      {isOpenLoginModal && <LoginModal/>}
      {isOpenUserInfoModal && <UserInfoModal/>}
      {isOpenHistoryModal && <ShoppingHistoryModal/>}
      {isOpenHistoryDetailModal && <HistoryDetailModal/>}
    </>
  );
}
