import {
    Box,
    Button, Center,
    Flex,
    Grid,
    GridItem,
    Image,
    Input,
    SimpleGrid,
    Square,
    Text,
    useNumberInput
} from "@chakra-ui/react";
import {useState} from "react";
import {ArrowRightIcon} from "@chakra-ui/icons";

function Item(props){
    const product = props.product;
    const [quantity, setQuantity] = useState(1)

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 9,
            // precision: 2,
        })
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })

    return(
        <Box p={3} bg="#ffde46" color="#605439"
             borderRadius='14' marginBottom={4}
        >
            <Grid templateColumns='repeat(10, 1fr)'>
                <GridItem colSpan={{ base: '5', md: '4' }} p={{ base: '0', md: '1' }}
                >
                    <Flex>
                        <Square flex='1'>
                            <Image
                                borderRadius='14'
                                // maxWidth='100%'
                                // boxSize='220px'
                                p={{ base: '0', lg: '2' }}
                                objectFit='cover'
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
                        >Giá lẻ: {product.productPrice}đ/{product.saleUnit}</Text>
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
                <GridItem colSpan={{ base: '5', md: '6' }} paddingLeft={3} paddingTop={0} >
                    <SimpleGrid columns='1'>
                        <Text paddingTop={0}
                              fontSize={{ base: 'lg', md:'2xl', lg: '3xl' }}
                              fontWeight='bold'>{product.productName}</Text>
                        <Text paddingTop={0} minH='125px'
                              fontSize={{ base: 'xs', md:'sm', lg: 'md' }}
                        >{product.description}</Text>
                        <Box display={{base:'none', md:'block'}}>
                        <SimpleGrid marginBottom='0' columns='2' >
                            <Text fontWeight='bold' fontSize='md'
                            >Giá lẻ: {product.productPrice}đ/{product.saleUnit}</Text>
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
                        </SimpleGrid>
                        </Box>
                        <Box justifySelf='end' paddingTop={1} width={{base:'100%', md:'50%'}}>
                            <Center>
                                <Button bg='#f9f9f7' textColor='#5d5745'
                                        w='150px' size='sm'
                                ><ArrowRightIcon/>&nbsp; Mua Ngay</Button>
                            </Center>
                        </Box>
                    </SimpleGrid>
                </GridItem>
            </Grid>
        </Box>
    )
}
export default Item