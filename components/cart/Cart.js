import {Box, Button, Flex, Spacer, Text} from "@chakra-ui/react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { selectCart } from "./cartSlice";
import {numberWithCommas} from "../helper/numberWithCommas"
import { useDispatch } from "react-redux";
import { addInfo, openAddrModal } from "../invoice/invoiceSlice"
import { FaCartArrowDown } from "react-icons/fa";
import { selectIsLogin, selectUser } from "../auth/authSlice";
import { useToast } from "@chakra-ui/react";

function Cart(){

    const cart = useSelector(selectCart)
    const isLogin = useSelector(selectIsLogin)
    const user = useSelector(selectUser)

    const amouth = cart.reduce((total, item)=>{
        return total += Number(item.productPrice)*Number(item.quantity)
    },0)

    const dispatch = useDispatch();
    const toast = useToast();

    function handleSubmit(){
        if (cart.length > 0) {
          if (isLogin) {
            const info = {
              name: user.fullname,
              phone: user.username,
              email: user.email,
              province: "",
              district: "",
              ward: "",
              addressDetail: user.address,
            };
            dispatch(addInfo(info));
          } else {
            dispatch(openAddrModal());
          }
        } else {
          toast({
            title: `Giỏ hàng trống !!`,
            status: "error",
            position: "bottom",
            variant: "left-accent",
            duration: 5000,
            isClosable: true,
          });
        }
    }

    return(
        <>
            <Box mb={1} border='1px #d7d7d7 solid' borderRadius='14'>
                <Flex borderRadius='14px 14px 0px 0px' borderBottom='1px #d7d7d7 solid'
                      p={2} pl={4} h={12}
                      bg='#5f5438' textColor='#f5f4ed' >
                    <Text p={1} fontWeight='bold' fontSize='2xl'><FaCartArrowDown/></Text>
                    <Text pl={1} fontWeight='bold' fontSize='xl'>Đơn hàng</Text>
                    &nbsp;
                    <Text fontSize='md'>({cart.length} món)</Text>
                </Flex>
                <Box overflowY={'scroll'} maxH='450px' bg='white'>
                    {cart.map(item=>{
                        return(<CartItem key={item.idProduct} cartItem={item} />)
                    })}
                </Box>
                <Flex borderRadius='0px 0px 14px 14px' p={4}
                     textColor='#595243' bg='#ffda7b'
                >
                    <Text fontSize='lg' color='black'>Tổng tiền:</Text>
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
                    onClick={()=>handleSubmit()}
            >
                <Text fontSize='xl'>Đặt hàng</Text>
            </Button>
        </>
    )
}
export default Cart