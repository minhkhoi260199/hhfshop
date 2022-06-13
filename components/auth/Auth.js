import { Flex } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openLoginModal, openRegisterModal } from "./authSlice";

export default function Auth(){
    
    const dispatch = useDispatch();

    useEffect(()=>{
        const login = ()=>{
            dispatch(openLoginModal());
        }
        const register = ()=>{
            dispatch(openRegisterModal());
        }
        var loginButton = document.getElementById("loginButton");
        var registerButton = document.getElementById("registerButton");
        loginButton.addEventListener('click', login);
        registerButton.addEventListener('click', register);
        return () => {loginButton.removeEventListener('click', login);registerButton.removeEventListener('click', register);}
    }, [])

    return(
        <Flex>
            <Spacer/>
            <Box borderRadius="22px 0px 0px 22px" p={2}
            bg="white" cursor='pointer'
            id="loginButton"
            >
                Đăng nhập
            </Box>
            <Box borderRadius="0px 22px 22px 0px" p={2}
            bg="red" cursor='pointer'
            id="registerButton"
            color="white"
            >                
                Đăng ký
            </Box>
        </Flex>
    )
}