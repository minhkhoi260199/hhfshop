import {
    Box,
    Flex,
    Grid,
    GridItem,
    Image,
    Square,
    Text,
} from "@chakra-ui/react";

import {numberWithCommas} from "../helper/numberWithCommas"
import { Spacer } from "@chakra-ui/react";
import { BASEURL } from "../helper/config";

function InvoiceItem(props){

    const item = props.cartItem

    return(
        <Box borderBottom='1px #d7d7d7 solid'
             p={2} textColor='#595243' bg='#f9f9f7'
             position='relative'
        >
            <Grid templateColumns='repeat(30, 1fr)'>
                <GridItem colSpan='5'>
                    <Flex>
                        <Square flex='1'>
                            <Image
                                borderRadius='14'
                                // p={1}
                                objectFit='cover'
                                // src={'./images/'+item.photo}
                                src={BASEURL+"/static/uploads/images/" + item.photo}
                                alt={item.photo}
                            />
                        </Square>
                    </Flex>
                </GridItem>
                <GridItem pl={3} pr={2} colSpan='25'>
                    <Text fontSize='lg' fontWeight='bold'>{item.productName}</Text>
                    <Flex>
                        <Text fontSize={{base: 'sm', md:'xs', lg:'sm'}}>{numberWithCommas(item.productPrice)}đ</Text>
                        <Spacer/>
                        <Text fontSize={{base: 'sm', md:'xs', lg:'sm'}}>x&nbsp;{item.quantity}&nbsp;{item.saleUnit}</Text>                
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}
export default InvoiceItem