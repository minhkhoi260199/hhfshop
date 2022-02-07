import { CheckIcon, NotAllowedIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Input, Modal, ModalContent, ModalOverlay, Select, Stack, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { closeConfirmModal, selectConfirmModalFlag, selectInvoiceInfo } from "./invoiceSlice"

export function ConfirmModal(){

    const dispatch = useDispatch();

    const isOpen = useSelector(selectConfirmModalFlag);
    const invoice = useSelector(selectInvoiceInfo);

    return(
        <Modal isCentered
                isOpen={isOpen}
                motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent p={0} pt={0} borderRadius='14px' bg='none'>
                <Box mb={1} border='1px #d7d7d7 solid' borderRadius='14'>
                    <Flex borderRadius='14px 14px 0px 0px' borderBottom='1px #d7d7d7 solid'
                        p={2} h={12}
                        bg='#a6e9ca' textColor='red' >
                        <Text paddingLeft={3} fontWeight='bold' fontSize='xl'><CheckIcon/>&nbsp;Xác nhận thông tin nhận hàng</Text>
                        &nbsp;
                    </Flex>
                    <Stack spacing={3}
                         borderRadius='0px 0px 14px 14px' p={4}
                        textColor='#595243' bg='#f9f9f7'
                    >
                        <h1></h1>
                        <Input id='phone' value={invoice.phone} placeholder='Số điện thoại của bạn' />
                        <Input id='name' value={invoice.name} placeholder='Họ và tên của bạn' />
                        <Select id='province' placeholder='Select province'
                                value={invoice.province}
                        >
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>                    
                        <Select id='district' placeholder='Select district'
                                value={invoice.district}
                        >
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>                    
                        <Select id='ward' placeholder='Select ward'
                                value={invoice.ward}
                        >
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>
                        <Input id='addressDetail' value={invoice.addressDetail} placeholder='Số nhà, tên đường' />                
                    </Stack>
                </Box>
                <Flex>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                    p={2} h={12} bg='#5f5438' w='100%' 
                    textColor='#f5f4ed' fontWeight='bold'
                    textAlign='center' className="browButton"
                    onClick={()=>dispatch(closeConfirmModal())}
                >
                    <Text fontSize='xl'>Huỷ&nbsp;<NotAllowedIcon/></Text>
                </Button>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                        p={2} h={12} bg='#a6e9ca' w='100%'
                         textColor='green' fontWeight='bold'
                        textAlign='center' className="redButton"
                        onClick={()=>dispatch(closeConfirmModal())}
                >
                    <Text fontSize='xl'>Xác nhận&nbsp;<CheckIcon/></Text>
                </Button>
                </Flex>
            </ModalContent>
        </Modal>
    )
}