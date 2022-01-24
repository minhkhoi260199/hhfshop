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
    useNumberInput
} from "@chakra-ui/react";
import {SmallCloseIcon} from "@chakra-ui/icons";

function CartItem(props){

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 9,
        })
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const item = props.cartItem
    const quantity = Number(input.value)
    const total = Number(item.productPrice)*quantity

    return(
        <Box borderBottom='1px #d7d7d7 solid'
             p={2} textColor='#595243'
             position='relative'
        >
            <Tooltip hasArrow label='Bỏ sản phẩm' bg='pink.400'>
                <Box p='0' as='button' bottom='0' right='0' position='absolute'>
                    <SmallCloseIcon fontSize='25px' color='red'/>
                </Box>
            </Tooltip>
            <Grid templateColumns='repeat(14, 1fr)'>
                <GridItem colSpan='3'>
                    <Flex>
                        <Square flex='1'>
                            <Image
                                borderRadius='14'
                                p={1}
                                objectFit='cover'
                                src={'./images/'+item.gallery}
                                alt={item.gallery}
                            />
                        </Square>
                    </Flex>
                </GridItem>
                <GridItem pl={3} pr={2} colSpan='7'>
                    <Text fontSize='lg' fontWeight='bold'>{item.productName}</Text>
                    <Flex m={1} maxW='100px' bg='#ffda7b'
                          borderRadius='8'>
                        <Button {...dec}
                                size='xs' bg='#ffda7b'
                        >-</Button>
                        <Input {...input}
                               size='xs' bg='#f9f9f7' textAlign='center'
                               minW='30px'  p='1' fontSize='1rem'
                        />
                        <Button {...inc}
                                size='xs' bg='#ffda7b'
                        >+</Button>
                    </Flex>
                </GridItem>
                <GridItem colSpan='4' >
                    <Text fontSize={{base: 'sm', md:'xs', lg:'sm'}}>{numberWithCommas(item.productPrice)}đ</Text>
                    <Text fontSize={{base: 'sm', md:'xs', lg:'sm'}}>x&nbsp;{quantity}&nbsp;{item.saleUnit}</Text>
                    <Text fontSize={{base: 'sm', md:'xs', lg:'sm'}}
                          p={1} borderTop='1px solid #d7d7d7'
                    >{numberWithCommas(total)}đ</Text>
                </GridItem>
            </Grid>
        </Box>
    )
}
export default CartItem