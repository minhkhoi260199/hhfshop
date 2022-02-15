import { Box, Grid, GridItem } from "@chakra-ui/react";
import Head from 'next/head'

import SearchBar from "../components/SearchBar";
import Item from "../components/item/Item";
import Cart from "../components/cart/Cart";
import CartMobileBar from "../components/cart/CartMobileBar";
import { OrderInfoModal } from "../components/invoice/OrderInfoModal";
import { ConfirmModal } from "../components/invoice/ConfirmModal";

const products = [
  {
    idProduct: "1",
    productName: "Bơ sáp",
    description:
      "Bơ loại một không rẻ nhưng siêu ngon siêu chất lượng không bơ nào sánh bằng. Đảm bảo đáng đồng tiền bát gạo luôn !!",
    productPrice: "100000",
    saleUnit: "KG",
    gallery: "bo.jpg",
  },
  {
    idProduct: "2",
    productName: "Bơ bình dân",
    description:
      "Siêu ngon bổ rẻ, giác ả phải chăng siêu chất lượng được tuyển chọn từ miệt vườn",
    productPrice: "50000",
    saleUnit: "KG",
    gallery: "bo2.jpg",
  },
  {
    idProduct: "3",
    productName: "Bơ 1",
    description:
      "Bơ loại một không rẻ nhưng siêu ngon siêu chất lượng không bơ nào sánh bằng. Đảm bảo đáng đồng tiền bát gạo luôn !!",
    productPrice: "1000000",
    saleUnit: "KG",
    gallery: "bo4.jpg",
  },
];

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Hiệp hoà farm</title>
        <meta name="description" content="Nông sản sạch đến tay người dùng" />
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
            <SearchBar />
          </Box>
          {products.map((item) => {
            return <Item key={item.idProduct} product={item} />;
          })}
        </GridItem>
        <GridItem colSpan={1} display={{ base: "none", md: "block" }}>
          <Box position="sticky" top={4}>
            <SearchBar />
            <Cart />
          </Box>
        </GridItem>
        <CartMobileBar />
      </Grid>
      <OrderInfoModal />
      <ConfirmModal />
    </>
  );
}
