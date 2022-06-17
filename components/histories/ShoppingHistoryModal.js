import {
  ModalContent,
  Flex,
  Text,
  Box,
  ModalOverlay,
  Modal,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Th,
  Tfoot,
  Tbody,
  Tr,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addDetailList, closeHistoryModal, openHistoryDetailModal, selectHistoryList } from "./historySlice";
import { FaCartArrowDown, FaListUl } from "react-icons/fa";
import { Td } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import {numberWithCommas} from "../helper/numberWithCommas"
import { useToast } from "@chakra-ui/react";
import UserApi from "../../pages/api/userApi";

export function ShoppingHistoryModal() {
  const dispatch = useDispatch();
  const orders = useSelector(selectHistoryList);
  const toast = useToast();

  const loadHistoryDetail = async (idOrder) =>{
    try {
        const response = await UserApi.getHistoryOrderDetailByOrderId(idOrder);
        console.log("data orders: "+ response);
        if(response != null){
            dispatch(addDetailList(response));
            dispatch(openHistoryDetailModal());
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

  const handleSubmit = (idOrder) => {
    loadHistoryDetail(idOrder);
  }

  return (
    <Modal isCentered size='xl' isOpen="true" motionPreset="slideInBottom">
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
            <Text paddingLeft={3}>Lịch sử mua hàng</Text>
          </Flex>
          <Box overflowY={"scroll"} maxH="500px" p={2} bg='white'>
            <TableContainer>
              <Table variant="simple" size='sm'>
                <TableCaption>
                  Nhấn vào nút hồng để xem chi tiết đơn hàng
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Ngày đặt</Th>
                    <Th isNumeric>Thổng tiền</Th>
                    <Th>Trạng thái</Th>
                    <Th>Chi tiết</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {orders.map((item) => {
                    return (
                      <Tr key={item.idOrder}>
                        <Td>{item.createdTime}</Td>
                        <Td isNumeric>{numberWithCommas(item.orderAmount)}</Td>
                        <Td>{item.statusByStatusId.statusNameVie}</Td>
                        <Td>
                        <Button colorScheme='pink' variant='solid' onClick={()=>handleSubmit(item.idOrder)}
                        ><FaListUl /></Button>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
                {/* <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot> */}
              </Table>
            </TableContainer>
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
          onClick={() => dispatch(closeHistoryModal())}
        >
          <Text fontSize="xl">Đóng</Text>
        </Button>
      </ModalContent>
    </Modal>
  );
}
