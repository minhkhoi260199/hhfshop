import {
  MenuItem,
  MenuDivider
} from "@chakra-ui/react";
import { Text, Image, Flex } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { openUserInfoModal, selectUser, userLogout } from "./authSlice";
import UserApi from "../../pages/api/userApi";
import { addHistoryList, openHistoryModal } from "../histories/historySlice";

export default function Authed() {
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  const toast = useToast();

  const loadHistory = async () => {
    try {
      const response = await UserApi.getHistoryOrders(userInfo.username);
      if (response != null) {
        dispatch(addHistoryList(response));
        dispatch(openHistoryModal());
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
  };

  const handleInfoMenu = () => {
    dispatch(openUserInfoModal());
  };
  const handleLogout = () => {
    dispatch(userLogout());
    toast({
      title: `ĐĂNG XUẤT THÀNH CÔNG`,
      description: "Gét goooo !",
      status: "warning",
      position: "top-right",
      variant: "left-accent",
      duration: 1000,
      isClosable: true,
    });
  };
  const handleHistory = () => {
    loadHistory();
  };

  return (
    <>
      <MenuItem>
        <Flex>
          <Image
            borderRadius="full"
            boxSize="2rem"
            objectFit="cover"
            src="/loadingImage.gif"
            //   src={BASEURL + "/static/uploads/images/" + img.photo}
            alt="avatar"
          />
          &nbsp;&nbsp;
          <Text fontSize="sm" fontWeight="normal">
            {userInfo.fullname}
          </Text>
        </Flex>
      </MenuItem>
      <MenuDivider />
      <MenuItem onClick={() => handleHistory()}>Lịch sử đặt hàng</MenuItem>
      <MenuItem onClick={() => handleInfoMenu()}>Thông tin tài khoản</MenuItem>
      <MenuDivider />
      <MenuItem onClick={() => handleLogout()}>Đăng xuất</MenuItem>
    </>
  );
}
