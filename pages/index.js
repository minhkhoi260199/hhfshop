import { Box, Grid, GridItem } from "@chakra-ui/react";

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
import { selectLoginModalFlag, selectRegisterModalFlag, selectUserInfoModalFlag } from "../components/auth/authSlice";
import { RegisterModal } from "../components/auth/RegisterModal";
import { LoginModal } from "../components/auth/LoginModal";
import { UserInfoModal } from "../components/auth/userInfoModal";

export default function Home() {
  
  // const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(0);
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingProduct);
  const products = useSelector(selectAllProduct);

  const isOpenConfirmModal = useSelector(selectConfirmModalFlag);
  const isOpenAddrModal = useSelector(selectAddrModalFlag);

  const isOpenRegisterModal = useSelector(selectRegisterModalFlag);
  const isOpenLoginModal = useSelector(selectLoginModalFlag);
  const isOpenUserInfoModal = useSelector(selectUserInfoModalFlag);

  // useEffect(()=>{
  //   // if(products.length == 0){
  //     setWidth(window.innerWidth);
  //     const fetchCategoryList = async () => {
  //       try {
  //         const cates = await ProductApi.getCategories();
  //         dispatch(addAllCategory(cates));
  //         console.log("Category API success !!!");
  //         // dispatch(offLoading())
  //         // console.log("data"+ JSON.stringify(response));
  //         console.log("category :"+ JSON.stringify(cates));
  //       } catch (error) {
  //         console.log("Product API Fail !!");
  //         console.log(error);
  //       }
  //     }
  //     fetchCategoryList();
  //   // } else {
  //     // dispatch(offLoading())
  //   // }
  // }, [])
  useEffect(()=>{
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
  },[])

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
      {isOpenRegisterModal && <RegisterModal/>}
      {isOpenLoginModal && <LoginModal/>}
      {isOpenUserInfoModal && <UserInfoModal/>}
    </>
  );
}
