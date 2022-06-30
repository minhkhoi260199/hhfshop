import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../components/SearchBar";
import Item from "../components/item/Item";
import Cart from "../components/cart/Cart";
import CartMobileBar from "../components/cart/CartMobileBar";
import { OrderInfoModal } from "../components/invoice/OrderInfoModal";
import { ConfirmModal } from "../components/invoice/ConfirmModal";

import { addAllProduct, selectAllProduct, selectIsLoadingProduct } from "../components/item/productSlice";
import ProductApi from "./api/productApi";

import { selectAddrModalFlag, selectConfirmModalFlag } from "../components/invoice/invoiceSlice"
import LoadingScreen from "../components/layout/loadingScreen";
import Notify from "../components/ads/Notify";
import CategoryBar from "../components/categoryBar/CategoryBar";
import { openSlider, selectDetailModalFlag } from "../components/productDetail/detailSlice";
import { ProductDetailModal } from "../components/productDetail/ProductDetailModal";

export default function Home() {
  
  // const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(768);
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingProduct);
  const products = useSelector(selectAllProduct);

  const isOpenConfirmModal = useSelector(selectConfirmModalFlag);
  const isOpenAddrModal = useSelector(selectAddrModalFlag);


  const isOpenDetailProductModal = useSelector(selectDetailModalFlag);

  useEffect(()=>{
    dispatch(openSlider());
    if(products.length == 0){
      setWidth(window.innerWidth);
      const fetchProductList = async () => {
        try {
          const products = await ProductApi.getAll();
          dispatch(addAllProduct(products));
          console.log("Product API success !!!");
          // dispatch(offLoading())
          // console.log("data"+ JSON.stringify(products));
        } catch (error) {
          console.log("Product API Fail !!");
          console.log(error);
        }
      }
      fetchProductList();
    }
  }, [])
  useEffect(()=>{
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [])

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={{ base: "3", md: "2" }}>
          <CategoryBar />
          <Box
            display={{ base: "block", md: "none" }}
            position="sticky" zIndex={1} top={1}
          >
            {width < 768 && <SearchBar />}  
          </Box>
          { isLoading && <LoadingScreen cursor="wait"/> }
          { (products.length>0) 
          ?
            products.map((item) => {
              return <Item key={item.idProduct} product={item} />;
            })
          :
            <Text fontSize="xl" fontWeight="bold" textAlign="center"> Không có kết quả tìm kiếm ! </Text>
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
      {isOpenDetailProductModal && <ProductDetailModal/>}
    </>
  );
}
