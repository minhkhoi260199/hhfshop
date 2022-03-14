import { Box, Button, Flex, Spacer, Modal, ModalContent, ModalOverlay, Stack, Text } from "@chakra-ui/react"
import { FaCheck, FaCheckDouble, FaRegTimesCircle, FaMapMarkerAlt, FaUserAlt, FaShippingFast } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../cart/cartSlice";
import { closeConfirmModal, selectConfirmModalFlag, selectInvoiceInfo } from "./invoiceSlice"

import InvoiceItem from "./InvoiceItem";
import {numberWithCommas} from "../helper/numberWithCommas"

export function ConfirmModal(){

    const dispatch = useDispatch();

    const isOpen = useSelector(selectConfirmModalFlag);
    const invoice = useSelector(selectInvoiceInfo);
    
    const cart = useSelector(selectCart);

    const amouth = cart.reduce((total, item)=>{
        return total += Number(item.productPrice)*Number(item.quantity)
    },0)

    const shipfee = 30000

    const totalPayment = amouth + shipfee

    return(
        <Modal isCentered
                isOpen={isOpen}
                motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent p={0} pt={0} borderRadius='14px' bg='none'>
                <Box mb={1} border='1px #d7d7d7 solid' borderRadius='14'>
                    <Flex borderRadius='14px 14px 0px 0px' borderBottom='1px #d7d7d7 solid'
                        p={2} h={12} bg='#a6e9ca'
                        fontWeight='bold' fontSize='xl' textColor='red' >
                        <Text p={1} ><FaCheckDouble/></Text>
                        <Text paddingLeft={3} >Xác nhận thông tin</Text>
                    </Flex>
                    <Stack spacing={1}
                         borderRadius='0px 0px 14px 14px'
                        textColor='#595243' bg='#f9f9f7'
                    >  
                        <Box className="envelopeBorder" p={2}>
                            <Text textColor="red" mb={1}>Giao đến: </Text>
                            <Flex>
                                <FaUserAlt color="#f7665f" /> &nbsp; 
                                <Text ml={1}>
                                    {invoice.name} | {invoice.phone}
                                </Text>
                            </Flex>
                            <Flex>
                                <FaMapMarkerAlt color="blue" size={'22px'}/> &nbsp; 
                                <Text ml={1}>
                                    {invoice.addressDetail}, {invoice.ward}, {invoice.district}, {invoice.province}
                                </Text>
                            </Flex>
                            <Flex>
                                <FaShippingFast color="green" /> &nbsp; 
                                <Text ml={1}>
                                    AhaMove Thần tốc
                                </Text>
                            </Flex>
                        </Box>
                        <Box>
                            <Text pl={2} textColor="red">Tóm tắt đơn hàng: ( {cart.length} món )</Text>
                            <Box overflowY={'scroll'} maxH='250px' p={2}>
                                {cart.map(item=>{
                                    return(<InvoiceItem key={item.idProduct} cartItem={item} />)
                                })}
                            </Box>
                        </Box>
                        <Box borderRadius='0px 0px 14px 14px' p={3}
                            borderTop='2px dashed #595243' 
                            textColor='#595243' bg='#f9f9f7'
                        >
                            <Flex>
                                <Text fontSize='md'>Tổng tiền hàng:</Text>
                                <Spacer/>
                                <Text fontSize='md' justifySelf='end'
                                    >{numberWithCommas(amouth)}</Text>đ
                            </Flex>
                            <Flex>
                                <Text fontSize='md'>Vận chuyển:</Text>
                                <Spacer/>
                                <Text fontSize='md' justifySelf='end'
                                    >{numberWithCommas(shipfee)}</Text>đ
                            </Flex>
                            <Flex>
                                <Text fontSize='lg' fontWeight='bold'>Tổng thanh toán:</Text>
                                <Spacer/>
                                <Text fontSize='lg' fontWeight='bold'
                                    justifySelf='end'
                                    >{numberWithCommas(totalPayment)}</Text>đ
                            </Flex>
                        </Box>
                    </Stack>
                </Box>
                <Flex>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                    p={2} h={12} bg='#5f5438' w='100%' 
                    textColor='#f5f4ed' fontWeight='bold'
                    textAlign='center' className="browButton"
                    onClick={()=>dispatch(closeConfirmModal())}
                >
                    <Text fontSize='xl'>Huỷ</Text>&nbsp;<FaRegTimesCircle/>
                </Button>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                        p={2} h={12} bg='#a6e9ca' w='100%'
                         textColor='green' fontWeight='bold'
                        textAlign='center' className="redButton"
                        onClick={()=>dispatch(closeConfirmModal())}
                >
                    <Text fontSize='xl'>Đặt hàng</Text>&nbsp;<FaCheck/>
                </Button>
                </Flex>
            </ModalContent>
        </Modal>
    )
}