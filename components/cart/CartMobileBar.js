import {Button, Center, Flex, Grid, GridItem, Text} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";

function CartMobileBar(){
    return(
        <Flex display={{base: 'block', md:'none'}}
            p={3} position="fixed" bottom={0} left={0}
            bg='#a6e9ca' w='100%'
            borderRadius='14px 14px 0px 0px'
        >
            <Grid templateColumns='repeat(2, 1fr)'>
                <GridItem colSpan={1} fontSize='md'>
                    <Text textColor='black'><strong>Tổng cộng:</strong>&nbsp;(2 món)</Text>
                    <Text fontWeight='bold' textColor='red'>140.000đ</Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <Center>
                        <Button bg='#ed645f' textColor='#f9f9f7'
                                size='md' margin='auto'
                                justifySelf='center'
                        ><EditIcon/>&nbsp; Giỏ hàng</Button>
                    </Center>
                </GridItem>
            </Grid>
        </Flex>
    )
}
export default CartMobileBar