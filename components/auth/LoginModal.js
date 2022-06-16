import { InputRightElement } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { Box, Button, Flex, Input, Modal, ModalContent, ModalOverlay, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import UserApi from "../../pages/api/userApi";
import { addLoginInfo, closeLoginModal } from "../auth/authSlice";

export function LoginModal(){

    const dispatch = useDispatch();
    const toast = useToast();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [showPass, setShowPass] = useState(false)
    
    const login = async () =>{
        try {
            const response = await UserApi.login(username, password);
            // console.log("data"+ JSON.stringify(response));
            if(response != null){
                toast({
                    title: `ĐĂNG NHẬP THÀNH CÔNG`,
                    description: "Đi chợ thôi nào gét goooo !",
                    status: "success",
                    position: "top-right",
                    variant: "left-accent",
                    duration: 4000,
                    isClosable: true,
                    });
                dispatch(addLoginInfo(response));
                console.log("Search API success !!!");
            }
        } catch (error) {
            toast({
                title: `Sai username, password hoặc tài khoảng bị vô hiệu !!`,
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

    const handleSubmit = () => {
        if(username=="" || password==""){
            toast({
                title: `Thông tin trống ?`,
                status: "error",
                position: "bottom",
                variant: "left-accent",
                duration: 5000,
                isClosable: true,
                });          
            console.log("Invalidate!");
        } else {
            login();
        }
    }

    return(
        <Modal isCentered
                isOpen={true}
                motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent p={0} pt={0} borderRadius='14px' bg='none'>
                <Box mb={1} border='1px #d7d7d7 solid' borderRadius='14'>
                    <Flex borderRadius='14px 14px 0px 0px' borderBottom='1px #d7d7d7 solid'
                        p={2} h={12} fontWeight='bold' fontSize='xl'
                        bg='#5f5438' textColor='#f5f4ed' >
                        <Text p={1} ><FaEdit/></Text>
                        <Text paddingLeft={3} >ĐĂNG NHẬP</Text>
                    </Flex>
                    <Stack spacing={3}
                         borderRadius='0px 0px 14px 14px' p={4}
                        textColor='#595243' bg='#f9f9f7'
                    >
                        <Input id='phone' value={username} type='number'
                                onChange={(e)=>setUsername(e.target.value)} 
                                placeholder='Số điện thoại của bạn' />
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={showPass ? 'text' : 'password'}
                                placeholder='Mật khẩu'
                                id='password' value={password}
                                onChange={(e)=>setPassword(e.target.value)} 
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={() => setShowPass(!showPass)}>
                                {showPass ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                </Box>
                <Flex>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                    p={2} h={12} bg='#5f5438' w='100%' 
                    textColor='#f5f4ed' fontWeight='bold'
                    textAlign='center' className="browButton"
                    onClick={()=>dispatch(closeLoginModal())}
                >
                    <FaArrowLeft/><Text fontSize='xl'>&nbsp;Hủy</Text>
                </Button>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                        p={2} h={12} bg='#df5854' w='100%'
                         textColor='#f5f4ed' fontWeight='bold'
                        textAlign='center' className="redButton"
                        onClick={()=>handleSubmit()}
                >
                    <Text fontSize='xl'>Đăng nhập</Text>&nbsp;<FaArrowRight/>
                </Button>
                </Flex>
            </ModalContent>
        </Modal>
    )
}