import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Image,
    Input,
    Square,
    Text, Tooltip,
} from "@chakra-ui/react";
import {increment, decrement, removeCartItem} from "../cart/cartSlice"
import { useDispatch } from "react-redux";
import { memo } from "react";
import { FaTimes } from "react-icons/fa";

import {numberWithCommas} from "../helper/numberWithCommas"
import { BASEURL } from "../helper/config";

function CartItem(props){

    const item = props.cartItem
    const dispatch = useDispatch();
    const total = Number(item.productPrice)*item.quantity

    return(
        <Box borderBottom='1px #d7d7d7 solid'
             p={2} textColor='#595243' bg='#f9f9f7'
             position='relative'
        >
            {/* {console.log("item id: "+ item.idProduct)} */}
            <Tooltip hasArrow label='Xoá' bg='pink.400' placement='top'>
                <Box onClick={()=>dispatch(removeCartItem(item.idProduct))}
                    p='0' as='button' bottom='0' right='0' position='absolute'>
                    <FaTimes fontSize='22px' color='red'/>
                </Box>
            </Tooltip>
            <Grid templateColumns='repeat(16, 1fr)'>
                <GridItem colSpan='3'>
                    <Flex>
                        <Square flex='1'>
                            <Image
                                borderRadius='14'
                                p={1}
                                objectFit='cover'
                                // src={'./images/'+item.photo}
                                src={BASEURL+"/static/uploads/images/" + item.photo}
                                alt={item.photo}
                            />
                        </Square>
                    </Flex>
                </GridItem>
                <GridItem pl={3} pr={2} colSpan='8'>
                    <Text fontSize='md' fontWeight='bold'>{item.productName}</Text>
                    <Flex m={1} maxW='100px' bg='#ffda7b'
                          borderRadius='8'>
                        <Button onClick={()=>dispatch(decrement(item.idProduct))}
                                size='xs' bg='#ffda7b'
                        >-</Button>
                        <Input value={item.quantity} type='number' readOnly={true}
                                size='xs' bg='#f9f9f7' textAlign='center'
                               minW='30px'  p='1' fontSize='1rem'
                        />
                        <Button onClick={()=>dispatch(increment(item.idProduct))}
                                size='xs' bg='#ffda7b'
                        >+</Button>
                    </Flex>
                </GridItem>
                <GridItem colSpan='5' >
                    <Text fontSize={{base: 'sm', md:'xs', lg:'sm'}}>{numberWithCommas(item.productPrice)}đ</Text>
                    <Text fontSize={{base: 'sm', md:'xs', lg:'sm'}}>x&nbsp;{item.quantity}&nbsp;{item.saleUnit}</Text>
                    <Text fontSize={{base: 'sm', md:'xs', lg:'sm'}}
                          p={1} borderTop='1px solid #d7d7d7'
                    >{numberWithCommas(total)}đ</Text>
                </GridItem>
            </Grid>
        </Box>
    )
}
export default memo(CartItem)