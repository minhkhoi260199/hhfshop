import {Box, Button, Center, Flex, Grid, GridItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";
import Cart from "./Cart";

function CartMobileBar(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <Box display={{base: 'block', md:'none'}}>
            <Flex p={3} position="fixed" bottom={0} left={0}
                    bg='#a6e9ca' w='100%'
                    borderRadius='14px 14px 0px 0px'
            >
                <Grid templateColumns='repeat(2, 1fr)' w='100%'>
                    <GridItem colSpan={1} fontSize='md'>
                        <Text textColor='black'><strong>Tổng cộng:</strong>&nbsp;(2 món)</Text>
                        <Text fontWeight='bold' textColor='red'>140.000đ</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Center>
                            <Button bg='#ed645f' textColor='#f9f9f7'
                                    size='md' margin='auto'
                                    onClick={onOpen}
                            ><EditIcon/>&nbsp; Giỏ hàng</Button>
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
                <ModalContent p={0} pt={0} >
                    <Cart />
                    <Button borderRadius='14' p={2} h={12} w='100%' mt={1}
                            bg='#df5854' textColor='#f5f4ed' fontWeight='bold'
                            textAlign='center' 
                            onClick={onClose}
                    >
                        <Text fontSize='xl'>Đóng giỏ</Text>
                    </Button>
                </ModalContent>
            </Modal>        
        </Box>
    )
}
export default CartMobileBar