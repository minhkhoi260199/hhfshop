import {Box, Button, Center, Flex, Grid, GridItem, Modal, ModalContent, ModalOverlay, Text, useDisclosure} from "@chakra-ui/react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { selectCart } from "./cartSlice";
import {numberWithCommas} from "../helper/numberWithCommas"
import { FaCartPlus } from "react-icons/fa";

function CartMobileBar(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    const cart = useSelector(selectCart)

    const amouth = cart.reduce((total, item)=>{
        return total += Number(item.productPrice)*Number(item.quantity)
    },0)

    return(
        <Box display={{base: 'block', md:'none'}} zIndex={2}>
            <Flex p={3} position="fixed" bottom={0} left={0}
                    bg='#a6e9ca' w='100%'
                    borderRadius='14px 14px 0px 0px'
            >
                <Grid templateColumns='repeat(2, 1fr)' w='100%'>
                    <GridItem colSpan={1} fontSize='md'>
                        <Text textColor='black'><strong>Tổng cộng:</strong>&nbsp;({cart.length} món)</Text>
                        <Text fontWeight='bold' textColor='red'>{numberWithCommas(amouth)}đ</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Center>
                            <Button bg='#ed645f' textColor='#f9f9f7'
                                    size='md' margin='auto'
                                    onClick={onOpen} className="redButton"
                            ><FaCartPlus/>&nbsp; Giỏ hàng</Button>
                        </Center>
                    </GridItem>
                </Grid>
            </Flex>
            <Modal isCentered
                    onClose={onClose}
                    isOpen={isOpen}
                    motionPreset='slideInBottom'
                    
            >
                <ModalOverlay />
                <ModalContent p={0} pt={0} borderRadius='14px' bg='none'>
                    <Cart />
                    {/* <Button borderRadius='14' border='1px #d7d7d7 solid'
                            p={2} h={12} w='100%' mt={1}
                            bg='#df5854' textColor='#f5f4ed' fontWeight='bold'
                            textAlign='center' className="redButton"
                            onClick={onClose}
                    >
                        <Text fontSize='xl'>Đóng giỏ</Text>
                    </Button> */}
                </ModalContent>
            </Modal>        
        </Box>
    )
}
export default CartMobileBar