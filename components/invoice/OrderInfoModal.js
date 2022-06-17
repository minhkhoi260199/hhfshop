import { Box, Button, Flex, Input, Modal, ModalContent, ModalOverlay, Select, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addInfo, closeAddrModal, selectInvoiceInfo } from "./invoiceSlice"

export function OrderInfoModal(){

    const dispatch = useDispatch();

    const invoice = useSelector(selectInvoiceInfo);

    const [name, setName] = useState(invoice.name);
    const [phone, setPhone] = useState(invoice.phone);
    const [email, setEmail] = useState(user.email);
    const [province, setProvince] = useState(invoice.province);
    const [district, setDistrict] = useState(invoice.district);
    const [ward, setWard] = useState(invoice.ward);
    const [addressDetail, setAddressDetail] = useState(invoice.addressDetail);
    
    function handleSubmit(){
        if(name=="" || phone=="" || addressDetail=="" || email=="" || province=="" || district=="" || ward==""){
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
            const invoice = {
                "name" : name,
                "phone" : phone,
                "email" : email,
                "province" : province,
                "district" : district,
                "ward" : ward,
                "addressDetail" : addressDetail,
            }
            dispatch(addInfo(invoice))
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
                        <Text paddingLeft={3} >Thông tin giao hàng</Text>
                    </Flex>
                    <Stack spacing={3}
                         borderRadius='0px 0px 14px 14px' p={4}
                        textColor='#595243' bg='#f9f9f7'
                    >
                        <Text>Số điện thoại đặt hàng:</Text>
                        <Input id='phone' value={phone}
                                type='number'
                                onChange={(e)=>setPhone(e.target.value)} 
                                placeholder='Số điện thoại của bạn' />
                        <Text>Tên người nhận:</Text>
                        <Input id='name' value={name}
                                onChange={(e)=>setName(e.target.value)} 
                                placeholder='Họ và tên của bạn' />
                        <Text>Email:</Text>
                        <Input id='email' type='email' value={email}
                                onChange={(e)=>setEmail(e.target.value)} 
                                placeholder='linhfarm@gmail.com' /> 
                        <Text>Địa chỉ:</Text>
                        <Select id='province' value={province}
                                onChange={(e)=>setProvince(e.target.value)} 
                                placeholder='Chọn thành phố'>
                            <option selected>Hồ Chí Minh</option>
                        </Select>                    
                        <Select id='district' value={district}
                                onChange={(e)=>setDistrict(e.target.value)} 
                                placeholder='Chọn Quận'>
                            <option>Quận 1</option>
                            <option>Quận 2</option>
                            <option>Quận 3</option>
                            <option>Quận 4</option>
                            <option>Quận 5</option>
                            <option>Quận 6</option>
                            <option>Quận 7</option>
                            <option>Quận 8</option>
                            <option>Quận 9</option>
                            <option>Quận 10</option>
                            <option>Quận 11</option>
                            <option>Quận 12</option>
                            <option>Quận Tân Bình</option>
                            <option>Quận Bình Thạnh</option>
                            <option>Quận Bình Tân</option>
                            <option>Quận Tân Phú</option>
                            <option>Quận Phú Nhuận</option>
                            <option>Quận Gò Vấp</option>
                            <option>Quận Thủ Đức</option>
                        </Select>                    
                        <Select id='ward' value={ward}
                                onChange={(e)=>setWard(e.target.value)} 
                                placeholder='Chọn phường'>
                            <option>phường 1</option>
                            <option>phường 2</option>
                            <option>phường 3</option>
                            <option>phường 4</option>
                            <option>phường 5</option>
                            <option>phường 6</option>
                            <option>phường 7</option>
                            <option>phường 8</option>
                            <option>phường 9</option>
                            <option>phường 10</option>
                            <option>phường 11</option>
                            <option>phường 12</option>
                            <option>phường 13</option>
                            <option>phường 14</option>
                            <option>phường 15</option>
                            <option>phường 16</option>
                            <option>phường 17</option>
                            <option>phường 18</option>
                            <option>phường 19</option>
                            <option>phường 20</option>
                            <option>phường 21</option>
                            <option>phường 22</option>
                            <option>phường 23</option>
                            <option>phường 24</option>
                            <option>phường 25</option>
                            <option>phường 26</option>
                        </Select>
                        <Input id='addressDetail' value={addressDetail}
                                onChange={(e)=>setAddressDetail(e.target.value)} 
                                placeholder='Số nhà, tên đường' />                
                    </Stack>
                </Box>
                <Flex>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                    p={2} h={12} bg='#5f5438' w='100%' 
                    textColor='#f5f4ed' fontWeight='bold'
                    textAlign='center' className="browButton"
                    onClick={()=>dispatch(closeAddrModal())}
                >
                    <FaArrowLeft/><Text fontSize='xl'>&nbsp;Chọn lại</Text>
                </Button>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                        p={2} h={12} bg='#df5854' w='100%'
                         textColor='#f5f4ed' fontWeight='bold'
                        textAlign='center' className="redButton"
                        onClick={()=>handleSubmit()}
                >
                    <Text fontSize='xl'>Tiếp tục</Text>&nbsp;<FaArrowRight/>
                </Button>
                </Flex>
            </ModalContent>
        </Modal>
    )
}