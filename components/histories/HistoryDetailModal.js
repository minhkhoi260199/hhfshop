import {
  Grid,
  Image,
  Square,
  GridItem,
  Box,
  Button,
  Flex,
  Spacer,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaCheckDouble,
  FaMapMarkerAlt,
  FaUserAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { BASEURL } from "../helper/config";

import { numberWithCommas } from "../helper/numberWithCommas";
import {
  closeHistoryDetailModal,
  selectHistoryDetailList,
} from "./historySlice";

export function HistoryDetailModal() {

  const order = useSelector(selectHistoryDetailList);
  const dispatch = useDispatch();

  return (
    <Modal isCentered isOpen="true" motionPreset="slideInBottom">
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
              <FaCheckDouble />
            </Text>
            <Text paddingLeft={3}>Lịch sử đơn hàng</Text>
          </Flex>
          <Stack
            spacing={1}
            borderRadius="0px 0px 14px 14px"
            textColor="#595243"
            bg="#f9f9f7"
          >
            <Box className="envelopeBorder" p={2}>
              <Text textColor="red" mb={1}>
                Giao đến:{" "}
              </Text>
              <Flex>
                <FaUserAlt color="#f7665f" /> &nbsp;
                <Text ml={1}>
                  {order.orderInfo.customerName} |{" "}
                  {order.orderInfo.customerPhone}
                </Text>
              </Flex>
              <Flex>
                <FaMapMarkerAlt color="blue" /> &nbsp;
                <Text ml={1}>{order.orderInfo.address}</Text>
              </Flex>
              <Flex>
                <FaEnvelope color="green" /> &nbsp;
                <Text ml={1}>{order.orderInfo.email}</Text>
              </Flex>
            </Box>
            <Box>
              <Text pl={2} textColor="red">
                Tóm tắt đơn hàng: ( {order.orderDetails.length} món )
              </Text>
              <Box overflowY={"scroll"} maxH="250px" p={2}>
                {order.orderDetails.map((item) => {
                  return (
                    <Box
                      borderBottom="1px #d7d7d7 solid"
                      p={2}
                      textColor="#595243"
                      bg="#f9f9f7"
                      position="relative"
                      key={item.productId}
                    >
                      <Grid templateColumns="repeat(30, 1fr)">
                        <GridItem colSpan="5">
                          <Flex>
                            <Square flex="1">
                              <Image
                                borderRadius="14"
                                // p={1}
                                objectFit="cover"
                                // src={'./images/'+item.photo}
                                src={
                                  BASEURL +
                                  "/static/uploads/images/" +
                                  item.productPhoto[0].photo
                                }
                                alt="photo"
                              />
                            </Square>
                          </Flex>
                        </GridItem>
                        <GridItem pl={3} pr={2} colSpan="25">
                          <Text fontSize="lg" fontWeight="bold">
                            {item.productName}
                          </Text>
                          <Flex>
                            {/* <Text fontSize={{base: 'sm', md:'xs', lg:'sm'}}>{numberWithCommas(item.productPrice)}đ</Text> */}
                            <Spacer />
                            <Text fontSize={{ base: "sm", md: "xs", lg: "sm" }}>
                              x&nbsp;{item.quantity}&nbsp;{item.productSaleUnit}
                            </Text>
                          </Flex>
                        </GridItem>
                      </Grid>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box
              borderRadius="0px 0px 14px 14px"
              p={3}
              borderTop="2px dashed #595243"
              textColor="#595243"
              bg="#f9f9f7"
            >
              <Flex>
                <Text fontSize="md">Tạo ngày:</Text>
                <Spacer />
                <Text fontSize="md" justifySelf="end">
                  {order.orderInfo.createdTime}
                </Text>
              </Flex>
              {/* <Flex>
                <Text fontSize="md">Vận chuyển:</Text>
                <Spacer />
                <Text fontSize="md" justifySelf="end">
                  {numberWithCommas(30000)}
                </Text>
                đ
              </Flex> */}
              <Flex>
                <Text fontSize="lg" fontWeight="bold">
                  Tổng thanh toán:
                </Text>
                <Spacer />
                <Text fontSize="lg" fontWeight="bold" justifySelf="end">
                  {numberWithCommas(order.orderInfo.orderAmout)}
                </Text>
                đ
              </Flex>
            </Box>
          </Stack>
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
          onClick={() => dispatch(closeHistoryDetailModal())}
        >
          <Text fontSize="xl">Đóng</Text>
        </Button>
      </ModalContent>
    </Modal>
  );
}
