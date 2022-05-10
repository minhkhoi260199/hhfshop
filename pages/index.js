import { Box, Grid, GridItem } from "@chakra-ui/react";
import Head from 'next/head'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../components/SearchBar";
import Item from "../components/item/Item";
import Cart from "../components/cart/Cart";
import CartMobileBar from "../components/cart/CartMobileBar";
import { OrderInfoModal } from "../components/invoice/OrderInfoModal";
import { ConfirmModal } from "../components/invoice/ConfirmModal";

import { addAllProduct, selectAllProduct, onLoading, offLoading, selectIsLoading } from "../components/item/productSlice";
import ProductApi from "./api/productApi";

import { selectAddrModalFlag, selectConfirmModalFlag } from "../components/invoice/invoiceSlice"
import LoadingScreen from "../components/layout/loadingScreen";
import Notify from "../components/ads/Notify";

export default function Home() {
  
  // const [isLoading, setIsLoading] = useState(true);
  const isLoading = useSelector(selectIsLoading);
  const [width, setWidth] = useState(0);

  const dispatch = useDispatch();
  const products = useSelector(selectAllProduct);

  const isOpenConfirmModal = useSelector(selectConfirmModalFlag);
  const isOpenAddrModal = useSelector(selectAddrModalFlag);

  useEffect(()=>{
    if(products.length == 0){
      setWidth(window.innerWidth);
      const fetchProductList = async () => {
        try {
          const response = await ProductApi.getAll();
          dispatch(addAllProduct(response));
          console.log("API success !!!");
          // dispatch(offLoading())
          // console.log("data"+ JSON.stringify(response));
          // console.log("data"+ response);
        } catch (error) {
          console.log("Product API Fail !!");
          console.log(error);
        }
      }
      fetchProductList();
    } else {
      dispatch(offLoading())
    }
  }, [])
  useEffect(()=>{
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  },[])

  return (
    <>
      <Head>
        <title>Hiệp hoà farm</title>
        <meta name="description" content="Mang nông sản sạch đến ngôi nhà của bạn" />
        <link rel="shortcut icon" href="https://www.hiephoafarm.com/LogoHHF.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={{ base: "3", md: "2" }}>
          <Box
            display={{ base: "block", md: "none" }}
            top={0}
            position="sticky"
            zIndex={1}
          >
          {width < 768 && <SearchBar />}  
          </Box>
          { isLoading && <LoadingScreen /> }
          { 
            products.map((item) => {
              return <Item key={item.idProduct} product={item} />;
            })
          }
        </GridItem>
        <GridItem colSpan={1} display={{ base: "none", md: "block" }}>
          <Box position="sticky" top={4}>
            {width >= 768 && <SearchBar />}
            <Cart />
            <Notify />
          </Box>
        </GridItem>
        <CartMobileBar />
      </Grid>
      {isOpenAddrModal && <OrderInfoModal /> }
      {isOpenConfirmModal && <ConfirmModal />}
    </>
  );
}
