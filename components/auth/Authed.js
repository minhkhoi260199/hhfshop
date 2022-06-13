import {
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Image, Spacer, Flex } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openUserInfoModal, selectUser, userLogout } from "./authSlice";

export default function Authed() {
  
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  const toast = useToast()

  const handleInfoMenu = () => {
    dispatch(openUserInfoModal())
  }
  const handleLogout = () => {
    dispatch(userLogout())
    toast({
      title: `ĐĂNG XUẤT THÀNH CÔNG`,
      description: "Gét goooo !",
      status: "warning",
      position: "top-right",
      variant: "left-accent",
      duration: 1000,
      isClosable: true,
      });
  }
  const handleHistory = () => {
    console.log("shopping history!");
  }

  return (
    <Flex>
      <Spacer />
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<FaAngleDown />}
          colorScheme="green"
          pl={1}
          pr={1}
        >
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
              {userInfo.username}
            </Text>
          </Flex>
        </MenuButton>
        <MenuList zIndex={10}>
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
                {userInfo.username}
              </Text>
            </Flex>
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => handleHistory()}>Lịch sử đặt hàng</MenuItem>
          <MenuItem onClick={() => handleInfoMenu()}>Thông tin tài khoản</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => handleLogout()}>Đăng xuất</MenuItem>
        </MenuList>
      </Menu>
      {/* </Box> */}
    </Flex>
  );
}
