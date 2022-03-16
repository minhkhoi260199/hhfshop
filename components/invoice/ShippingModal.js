import { FaArrowLeft, FaArrowRight, FaEdit } from "react-icons/fa";
import { Box, Button, Flex, Input, Modal, ModalContent, ModalOverlay, Select, Stack, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { closeShippingModal, selectShippingModalFlag } from "./invoiceSlice"

export function ShippingModal(){

    const dispatch = useDispatch();

    const isOpen = useSelector(selectShippingModalFlag);

    return(
        <Modal isCentered
                isOpen={true}
                motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent p={0} pt={0} borderRadius='14px' bg='none'>
                <Box mb={1} border='1px #d7d7d7 solid' borderRadius='14'>
                    <Flex borderRadius='14px 14px 0px 0px' borderBottom='1px #d7d7d7 solid'
                        p={2} h={12}
                        bg='#5f5438' textColor='#f5f4ed' >
                        <Text paddingLeft={3} fontWeight='bold' fontSize='xl'><FaEdit/>&nbsp;Thông tin giao hàng</Text>
                        &nbsp;
                    </Flex>
                    <Stack spacing={3}
                         borderRadius='0px 0px 14px 14px' p={4}
                        textColor='#595243' bg='#f9f9f7'
                    >
                        <Input id='phone' placeholder='Số điện thoại của bạn' />
                        <Input id='name' placeholder='Họ và tên của bạn' />
                        <Select id='province' placeholder='Select province'>
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>                    
                        <Select id='district' placeholder='Select district'>
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>                    
                        <Select id='ward' placeholder='Select ward'>
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>
                        <Input id='addressDetail' placeholder='Số nhà, tên đường' />                
                    </Stack>
                </Box>
                <Flex>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                    p={2} h={12} bg='#5f5438' w='100%' 
                    textColor='#f5f4ed' fontWeight='bold'
                    textAlign='center' className="browButton"
                    onClick={()=>dispatch(closeShippingModal())}
                >
                    <Text fontSize='xl'><FaArrowLeft/>&nbsp;chọn lại món</Text>
                </Button>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                        p={2} h={12} bg='#df5854' w='100%'
                         textColor='#f5f4ed' fontWeight='bold'
                        textAlign='center' className="redButton"
                        onClick={()=>dispatch(closeShippingModal())}
                >
                    <Text fontSize='xl'>Tiếp tục&nbsp;<FaArrowRight/></Text>
                </Button>
                </Flex>
            </ModalContent>
        </Modal>
    )
}