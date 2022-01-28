import {Box, Button, Flex, Spacer, Text} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { selectCart } from "./cartSlice";
import {numberWithCommas} from "../helper/numberWithCommas"
import { useDispatch } from "react-redux";
import { openAddrModal } from "../invoice/invoiceSlice"

function Cart(){

    const cart = useSelector(selectCart)

    const amouth = cart.reduce((total, item)=>{
        return total += Number(item.productPrice)*Number(item.quantity)
    },0)

    const dispatch = useDispatch();

    return(
        <>
            <Box mb={1} border='1px #d7d7d7 solid' borderRadius='14'>
                <Flex borderRadius='14px 14px 0px 0px' borderBottom='1px #d7d7d7 solid'
                      p={2} h={12}
                      bg='#5f5438' textColor='#f5f4ed' >
                    <Text paddingLeft={3} fontWeight='bold' fontSize='xl'><EditIcon/>&nbsp;Đơn hàng</Text>
                    &nbsp;
                    <Text fontSize='md'>({cart.length} món)</Text>
                </Flex>
                {cart.map(item=>{
                    return(<CartItem key={item.idProduct} cartItem={item} />)
                })}
                <Flex borderRadius='0px 0px 14px 14px' p={4}
                     textColor='#595243' bg='#f9f9f7'
                >
                    <Text fontSize='lg'>Tổng tiền:</Text>
                    <Spacer/>
                    <Text fontSize='lg' fontWeight='bold'
                          justifySelf='end'
                    >{numberWithCommas(amouth)}</Text>đ
                </Flex>
            </Box>
            <Button borderRadius='14' border='1px #d7d7d7 solid'
                    p={2} h={12} bg='#5f5438' 
                    textColor='#f5f4ed' fontWeight='bold'
                    textAlign='center' w='100%' className="browButton"
                    onClick={()=>dispatch(openAddrModal())}
            >
                <Text fontSize='xl'>Đặt hàng</Text>
            </Button>
        </>
    )
}
export default Cart