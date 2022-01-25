import {Box, Button, Flex, Spacer, Text} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import { selectCart } from "./cartSlice";


function Cart(){

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const [amouth, setAmouth] = useState(0);

    const cart = useSelector(selectCart)
    // console.log("Cart: " + JSON.stringify(cart));

    return(
        <>
            <Box mb={1} border='1px #d7d7d7 solid' borderRadius='14'>
                <Flex borderRadius='14px 14px 0px 0px' borderBottom='1px #d7d7d7 solid'
                      p={2} h={12}
                      bg='#5f5438' textColor='#f5f4ed' >
                    <Text paddingLeft={3} fontWeight='bold' fontSize='xl'><EditIcon/>&nbsp;Đơn hàng</Text>
                    &nbsp;
                    <Text fontSize='md'>(2 món)</Text>
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
                    textAlign='center' w='100%'
            >
                <Text fontSize='xl'>Thanh Toán</Text>
            </Button>
        </>
    )
}
export default Cart