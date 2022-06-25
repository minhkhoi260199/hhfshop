import {
  ModalContent,
  Flex,
  Text,
  Box,
  ModalOverlay,
  Modal,
  Grid,
  GridItem,
  Square,
  useNumberInput,
  Input,
  Spacer,
  Image,
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaAngleDoubleRight,
  FaCartArrowDown,
  FaPaperPlane,
} from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { numberWithCommas } from "../helper/numberWithCommas";
import { addDetailProduct, closeDetailModal, selectDetailProduct } from "./detailSlice";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { BASEURL } from "../helper/config";
import { addToCart } from "../cart/cartSlice";
import { selectIsLogin, selectUser } from "../auth/authSlice";
import { useEffect, useState } from "react";
import productApi from "../../pages/api/productApi";

export function ProductDetailModal() {
  const dispatch = useDispatch();
  const detail = useSelector(selectDetailProduct);
  const isLogin = useSelector(selectIsLogin);
  const user = useSelector(selectUser);
  const [content, setContent] = useState();

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
    idProduct: detail.product.idProduct,
    productName: detail.product.productName,
    productPrice: detail.product.productPrice,
    saleUnit: detail.product.saleUnit,
    photo:
      detail.product.galleriesByIdProduct.length > 0
        ? detail.product.galleriesByIdProduct[0].photo
        : "",
    quantity: input.value,
  };
  const toast = useToast();

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

  const saveReview = async (data) => {
      try {
        console.log("dataaaa : " + JSON.stringify(data));
          const response = await productApi.saveReview(data)
          // console.log(response);
          toast({
              title: `THÀNH CÔNG`,
              description: "Cảm ơn bạn đã giành thời gian đánh giá sản phẩm.",
              status: "success",
              position: "bottom",
              variant: "left-accent",
              duration: 5000,
              isClosable: true,
            });
            dispatch(closeDetailModal());
          } catch (error) {
          toast({
              title: `CÓ LỖI XẢY RA`,
              status: "error",
              position: "bottom",
              variant: "left-accent",
              duration: 3000,
              isClosable: true,
            });          
      }
  }

  const submitReview = () =>{
    const data = {
      "userId" : user.idUser,
      "productId" : detail.product.idProduct,
      "content" : content
    }
    saveReview(data);
  }

  return (
    <Modal isCentered size="xl" isOpen="true" motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent p={0} pt={0} borderRadius="14px" bg="none">
        <Box mb={1} border="1px #d7d7d7 solid" borderRadius="14">
          <Flex
            borderRadius="14px 14px 0px 0px"
            borderBottom="1px #d7d7d7 solid"
            p={2}
            h={12}
            bg="#a6e9ca"
            fontWeight="bold"
            fontSize="xl"
            textColor="red"
          >
            <Text p={1}>
              <FaCartArrowDown />
            </Text>
            <Text paddingLeft={3}>{detail.product.productName}</Text>
          </Flex>
          <Box p={3} bg="#ffde46" color="#605439">
            <Grid templateColumns="repeat(10, 1fr)">
              <GridItem colSpan={{ base: "5", md: "4" }}>
                <Flex>
                  <Square flex="1" overflow="auto" scale="auto" zIndex={0}>
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 5000 }}
                    >
                      {detail.product.galleriesByIdProduct.map((img) => {
                        return (
                          <SwiperSlide key={img.idGallery}>
                            <Image
                              borderRadius="14"
                              width="100%"
                              height="auto"
                              objectFit="cover"
                              //   src={"./images/" + img.photo}
                              src={
                                BASEURL + "/static/uploads/images/" + img.photo
                              }
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
                    Giá lẻ: {numberWithCommas(detail.product.productPrice)}đ/
                    {detail.product.saleUnit}
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
                <Box
                  paddingTop={0}
                  minH="80px"
                  fontSize={{ base: "xs", md: "sm", lg: "md" }}
                  overflowY={"scroll"}
                  maxH={{
                    base: "110px",
                    md: "100px",
                    xl: "180px",
                    "2xl": "200px",
                  }}
                  sx={{
                    "&::-webkit-scrollbar": {
                      width: "5px",
                      borderRadius: "8px",
                      backgroundColor: `rgba(0, 0, 0, 0.02)`,
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: `rgba(0, 0, 0, 0.06)`,
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: detail.product.description,
                  }}
                >
                  {/* {product.description} */}
                </Box>
                <Box w="100%" position="absolute" bottom="0">
                  <Box display={{ base: "none", md: "block" }}>
                    <Flex>
                      <Text fontWeight="bold" fontSize="md">
                        Giá lẻ: {numberWithCommas(detail.product.productPrice)}
                        đ/
                        {detail.product.saleUnit}
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
          <Text bg="white">Đánh giá sản phẩm: (Tổng đánh giá:&nbsp;{detail.countReview})</Text>
          <Box overflowY={"scroll"} maxH="500px" p={2} bg="white">
          {detail.reviews.map((review) => {
              return (
                <Box>
                  <Flex>
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://placekitten.com/120/120"
                      alt="Simon the pensive"
                      mr="12px"
                      />
                    <span>{review.userByUserId.fullname} - {review.createdTime}</span>
                  </Flex>
                    <span>{review.content}</span>
              </Box>
              );
            })}
          {isLogin && 
          <InputGroup size="md" bg="white">
            <Input pr="4.5rem" placeholder="Đánh giá của bạn ..."
                  onChange={(e)=>setContent(e.target.value)}
                  value={content}

            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={submitReview}>
                <FaPaperPlane />
              </Button>
            </InputRightElement>
          </InputGroup>
          }
          </Box>
        </Box>
        <Button
          borderRadius="14"
          border="1px #d7d7d7 solid"
          p={2}
          h={12}
          bg="#5f5438"
          textColor="#f5f4ed"
          fontWeight="bold"
          textAlign="center"
          w="100%"
          className="browButton"
          onClick={() => dispatch(closeDetailModal())}
        >
          <Text fontSize="xl">Đóng</Text>
        </Button>
      </ModalContent>
    </Modal>
  )};

