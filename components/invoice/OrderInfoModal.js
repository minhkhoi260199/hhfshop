import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Modal, ModalContent, ModalOverlay, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { closeAddrModal, selectAddrModalFlag } from "./invoiceSlice"

export function OrderInfoModal(){

    const dispatch = useDispatch();

    const isOpen = useSelector(selectAddrModalFlag);

    return(
        <Modal isCentered
                isOpen={isOpen}
                motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent p={0} pt={0} borderRadius='14px' bg='none'>
                <Box mb={1} border='1px #d7d7d7 solid' borderRadius='14' bg='#f9f9f7'>
                    <h1>Nhap thoong tin khach hang</h1>
                </Box>
                <Flex>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                    p={2} h={12} bg='#5f5438' w='100%' 
                    textColor='#f5f4ed' fontWeight='bold'
                    textAlign='center' className="browButton"
                    onClick={()=>dispatch(closeAddrModal())}
                >
                    <Text fontSize='xl'><ArrowBackIcon/>&nbsp;chọn lại món</Text>
                </Button>
                <Button borderRadius='14' border='1px #d7d7d7 solid'
                        p={2} h={12} bg='#df5854' w='100%'
                         textColor='#f5f4ed' fontWeight='bold'
                        textAlign='center' className="redButton"
                        onClick={()=>dispatch(closeAddrModal())}
                >
                    <Text fontSize='xl'>Tiếp tục&nbsp;<ArrowForwardIcon/></Text>
                </Button>
                </Flex>
            </ModalContent>
        </Modal>
    )
}