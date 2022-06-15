import { MenuItem } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { openLoginModal, openRegisterModal } from "./authSlice";

export default function MenuAuth() {
  const dispatch = useDispatch();

  return (
    <>
      <MenuItem onClick={()=>dispatch(openLoginModal())}>Đăng nhập</MenuItem>
      <MenuItem onClick={()=>dispatch(openRegisterModal())}>Đăng ký</MenuItem>
    </>
  );
}
