import { InputRightElement } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Box, Button, Flex, Input, Modal, ModalContent, ModalOverlay, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addLoginInfo, closeUserInfoModal, selectUser } from "./authSlice";
import UserApi from "../../pages/api/userApi";

export function UserInfoModal(){

    const dispatch = useDispatch();
    const toast = useToast()

    const user = useSelector(selectUser);

    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState("");
    const [oldPass, setOldPass] = useState(user.password);
    const [showPass, setShowPass] = useState(false)
    const [fullname, setFullname] = useState(user.fullname);
    const [address, setAddress] = useState(user.address);
    const [email, setEmail] = useState(user.email);
    
    const saveInfo = async (data) =>{
        try {
            const response = await UserApi.saveProfile(data);
            // console.log("data"+ JSON.stringify(response));
            if(response != null){
                toast({
                    title: `CẬP NHẬT THÀNH CÔNG`,
                    description: "Gét goooo !",
                    status: "success",
                    position: "bottom",
                    variant: "left-accent",
                    duration: 5000,
                    isClosable: true,
                    });
                dispatch(addLoginInfo(data));
                dispatch(closeUserInfoModal());
                console.log("Search API success !!!");
            }
        } catch (error) {
            toast({
                title: `Thông tin bạn nhập không hợp lệ hoặc username đã được sử dụng bởi người khác`,
                status: "error",
                position: "bottom",
                variant: "left-accent",
                duration: 5000,
                isClosable: true,
                });   
            console.log("Search API Fail !!");
            console.log(error);
        }
    }

    const handleSubmit = () => {
        if(username=="" || fullname=="" || address=="" || email==""){
            toast({
                title: `Bạn bỏ trống thông tin rồi !`,
                status: "error",
                position: "bottom",
                variant: "left-accent",
                duration: 5000,
                isClosable: true,
                });          
            console.log("Invalidate!");
        } else {
            let data = {
                "idUser" : user.idUser,
                "username" : username,
                "password" : (password!="" ? password : oldPass),
                "roleId" : user.roleId,
                "fullname" : fullname,
                "address" : address,
                "email" : email,
                "statusId" : user.statusId
            }
            saveInfo(data);
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
                        <Text paddingLeft={3} >Thông tin tài khoản</Text>
                    </Flex>
                    <Stack spacing={3}
                         borderRadius='0px 0px 14px 14px' p={4}
                        textColor='#595243' bg='#f9f9f7'
                    >
                        <Text>Số điện thoại:</Text>
                        <Input id='username' value={username}
                                type='number'
                                onChange={(e)=>setUsername(e.target.value)} 
                                placeholder='Số điện thoại của bạn' />
                        <Text>Mật khẩu:</Text>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={showPass ? 'text' : 'password'}
                                placeholder='Để trống nếu không đổi mật khẩu'
                                id='password' value={password}
                                onChange={(e)=>setPassword(e.target.value)} 
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={() => setShowPass(!showPass)}>
                                {showPass ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Text>Họ và tên:</Text>
                        <Input id='fullname' value={fullname}
                                onChange={(e)=>setFullname(e.target.value)} 
                                placeholder='Họ và tên' />
                        <Text>Địa chỉ nhận hàng:</Text>
                        <Input id='address' value={address}
                                onChange={(e)=>setAddress(e.target.value)} 
                                placeholder='19 Hai Bà Trưng, Quận 1, Tp.HCM' />
                        <Text>Email:</Text>
                        <Input id='email' type='email' value={email}
                                onChange={(e)=>setEmail(e.target.value)} 
                                placeholder='linhfarm@gmail.com' />             
                    </Stack>
                </Box>
                <Flex>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                    p={2} h={12} bg='#5f5438' w='100%' 
                    textColor='#f5f4ed' fontWeight='bold'
                    textAlign='center' className="browButton"
                    onClick={()=>dispatch(closeUserInfoModal())}
                >
                    <FaArrowLeft/><Text fontSize='xl'>&nbsp;Hủy</Text>
                </Button>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                        p={2} h={12} bg='#df5854' w='100%'
                         textColor='#f5f4ed' fontWeight='bold'
                        textAlign='center' className="redButton"
                        onClick={()=>handleSubmit()}
                >
                    <Text fontSize='xl'>Lưu thay đổi</Text>&nbsp;<FaArrowRight/>
                </Button>
                </Flex>
            </ModalContent>
        </Modal>
    )
}