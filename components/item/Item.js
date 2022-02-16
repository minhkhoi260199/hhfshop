import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Image,
    Input,
    Spacer,
    Square,
    Text,
    useNumberInput
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice"

import {numberWithCommas} from "../helper/numberWithCommas"
import { memo } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function Item(props){
    const { product } = props
    const dispatch = useDispatch()

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 10,
        })
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })

    const cartItem = {
        "idProduct" : product.idProduct,
        "productName" : product.productName,
        "productPrice" : product.productPrice,
        "saleUnit" : product.saleUnit,
        "gallery" : product.gallery,
        "quantity" : input.value,
    }

    const handleSubmit = () =>{
        dispatch(addToCart(cartItem));
    }

    return(
        <Box p={3} bg="#ffde46" color="#605439"
             borderRadius='14' marginBottom={4}
        >
            <Grid templateColumns='repeat(10, 1fr)'>
                <GridItem colSpan={{ base: '5', md: '4' }}>
                    <Flex>
                        <Square flex='1'>
                            <Image
                                borderRadius='14'
                                // objectFit='cover'
                                src={'./images/'+product.gallery}
                                alt={product.gallery}
                            />
                        </Square>
                    </Flex>
                    <Box display={{base:'block', md:'none'}}
                         textAlign='center'
                    >
                        <Text fontWeight='bold' fontSize='sm'
                              p={2}
                        >Giá lẻ: {numberWithCommas(product.productPrice)}đ/{product.saleUnit}</Text>
                        <Flex margin='auto' maxW='150px'>
                            <Button {...dec}
                                    size='sm' bg='#f9f9f7'
                            >-</Button>
                            <Input {...input}
                                   textAlign='center' bg='#f9f9f7' size='sm'
                                   minW='40px'  p='1' borderRadius='20px'
                            />
                            <Button {...inc}
                                    size='sm' bg='#f9f9f7'
                            >+</Button>
                        </Flex>
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base: '5', md: '6' }} 
                            pl={3} paddingBottom={{base:'0', md:'75px'}} 
                            position='relative'
                >
                    <Text paddingTop={0}
                            fontSize={{ base: 'lg', md:'2xl', lg: '3xl' }}
                            fontWeight='bold'
                        >{product.productName}
                    </Text>
                    <Text paddingTop={0} minH='125px'
                            fontSize={{ base: 'xs', md:'sm', lg: 'md' }}
                        >{product.description}
                    </Text>
                    <Box w='100%'
                        position='absolute' bottom='0'>
                        <Box display={{base:'none', md:'block'}}>
                            <Flex>
                                <Text fontWeight='bold' fontSize='md'
                                >Giá lẻ: {numberWithCommas(product.productPrice)}đ/{product.saleUnit}
                                </Text>
                                <Spacer />
                                <Box pr={3}>
                                    <Flex maxW='150px' >
                                        <Button {...dec}
                                                size='sm' bg='#f9f9f7'
                                        >-</Button>
                                        <Input {...input}
                                            textAlign='center' bg='#f9f9f7' size='sm'
                                            minW='40px'  p='1' borderRadius='20px'
                                        />
                                        <Button {...inc}
                                                size='sm' bg='#f9f9f7'
                                        >+</Button>
                                    </Flex>
                                    <Button bg='#f9f9f7' textColor='#5d5745'
                                            mt='2px' w='150px' size='sm'
                                            onClick={handleSubmit}
                                    ><FaAngleDoubleRight/>&nbsp; Mua Ngay</Button>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box display={{base:'block', md:'none'}}
                        position='absolute' bottom='0' right='0'
                    >
                        <Button bg='#f9f9f7' textColor='#5d5745'
                                w='110px' size='sm'
                                onClick={handleSubmit}
                        ><FaAngleDoubleRight/>&nbsp; Mua Ngay</Button>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}
export default memo(Item)