import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Spacer,
  Square,
  Text,
  useNumberInput,
  useToast,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

import { numberWithCommas } from "../helper/numberWithCommas";
import { memo } from "react";
import { FaAngleDoubleRight, FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import { BASEURL } from "../helper/config";
import productApi from "../../pages/api/productApi";
import { addDetailProduct, openDetailModal } from "../productDetail/detailSlice";

//Product Item
function Item(props) {
  const { product } = props;
  const dispatch = useDispatch();

  const toast = useToast();

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
    });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  const cartItem = {
    idProduct: product.idProduct,
    productName: product.productName,
    productPrice: product.productPrice,
    saleUnit: product.saleUnit,
    photo: (product.galleriesByIdProduct.length>0?product.galleriesByIdProduct[0].photo:''),
    quantity: input.value,
  };

  const handleSubmit = () => {
    dispatch(addToCart(cartItem));
    toast({
      title: `Đã thêm '` + cartItem.productName + `' vào giỏ`,
      status: "success",
      position: "bottom",
      variant: "left-accent",
      duration: 2000,
      isClosable: true,
    });
  };

  const gotoDetail = async (id) =>{
    try {
        const response = await productApi.getProductDetail(id);
        // console.log("data orders: "+ response);
        if(response != null){
          dispatch(addDetailProduct(response));
          dispatch(openDetailModal());
        }
    } catch (error) {
        toast({
            title: `Đã có lỗi xảy ra !!`,
            status: "error",
            position: "bottom",
            variant: "left-accent",
            duration: 5000,
            isClosable: true,
            });   
        console.log("API Fail !!");
        console.log(error);
    }
  }

  // const gotoDetail = () => {
  //   loadDetail(idOrder);
  // }

  return (
    <Box p={3} bg="#ffde46" color="#605439" borderRadius="14" marginBottom={4}>
      <Grid templateColumns="repeat(10, 1fr)">
        <GridItem colSpan={{ base: "5", md: "4" }}>
          <Flex>
            <Square flex="1" overflow="auto" scale="auto" zIndex={0}>
              <Swiper modules={[Pagination, Autoplay]}
                      pagination={{clickable : true}}
                      autoplay={{delay : 5000}} 
              >
                {product.galleriesByIdProduct.map((img) => {
                  return (
                    <SwiperSlide
                      key={img.idGallery}
                    >
                      <Image
                        borderRadius="14"
                        width="100%"
                        height="auto"
                        objectFit='cover'
                        //   src={"./images/" + img.photo}
                        src={ BASEURL + "/static/uploads/images/" + img.photo}
                        alt={img.photo}
                        />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Square>
          </Flex>
          <Box display={{ base: "block", md: "none" }} textAlign="center">
            <Text fontWeight="bold" fontSize="sm" p={2}>
              Giá lẻ: {numberWithCommas(product.productPrice)}đ/
              {product.saleUnit}
            </Text>
            <Flex margin="auto" maxW="150px">
              <Button {...dec} size="sm" bg="#f9f9f7">
                -
              </Button>
              <Input
                {...input}
                textAlign="center"
                bg="#f9f9f7"
                size="sm"
                minW="40px"
                p="1"
                borderRadius="20px"
              />
              <Button {...inc} size="sm" bg="#f9f9f7">
                +
              </Button>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          colSpan={{ base: "5", md: "6" }}
          pl={3}
          paddingBottom={{ base: "0", md: "75px" }}
          position="relative"
        >
          <Text
            paddingTop={0}
            fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
            fontWeight="bold"
          >
            {product.productName}
          </Text>
          <Button padding='0'
                  variant='solid'
                  position='absolute'
                  right='0px'
                  top='0px'
                  onClick={()=>gotoDetail(product.idProduct)}
          ><FaStar color="green" fontSize='lg'/></Button>
          <Box
            paddingTop={0}
            minH="80px"
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
            overflowY={'scroll'} 
            maxH={{ base: "110px", md: "100px", xl: "180px", '2xl': "200px" }}
            sx={{
              '&::-webkit-scrollbar': {
                width: '5px',
                borderRadius: '8px',
                backgroundColor: `rgba(0, 0, 0, 0.02)`,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: `rgba(0, 0, 0, 0.06)`,
              },
            }}
            dangerouslySetInnerHTML={{__html: product.description}}
          >
            {/* {product.description} */}
          </Box>
          <Box w="100%" position="absolute" bottom="0">
            <Box display={{ base: "none", md: "block" }}>
              <Flex>
                <Text fontWeight="bold" fontSize="md">
                  Giá lẻ: {numberWithCommas(product.productPrice)}đ/
                  {product.saleUnit}
                </Text>
                <Spacer />
                <Box pr={3}>
                  <Flex maxW="150px">
                    <Button {...dec} size="sm" bg="#f9f9f7">
                      -
                    </Button>
                    <Input
                      {...input}
                      textAlign="center"
                      bg="#f9f9f7"
                      size="sm"
                      minW="40px"
                      p="1"
                      borderRadius="20px"
                    />
                    <Button {...inc} size="sm" bg="#f9f9f7">
                      +
                    </Button>
                  </Flex>
                  <Button
                    bg="#f9f9f7"
                    textColor="#5d5745"
                    mt="2px"
                    w="150px"
                    size="sm"
                    onClick={handleSubmit}
                  >
                    <FaAngleDoubleRight />
                    &nbsp; Mua Ngay
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box
            display={{ base: "block", md: "none" }}
            position="absolute"
            bottom="0"
            right="0"
          >
            <Button
              bg="#f9f9f7"
              textColor="#5d5745"
              w="110px"
              size="sm"
              onClick={handleSubmit}
            >
              <FaAngleDoubleRight />
              &nbsp; Mua Ngay
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
export default memo(Item);
