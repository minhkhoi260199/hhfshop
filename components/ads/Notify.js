import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function Notify(){
    return(
        <Box bg={'#ff7676'} color='white'
            p={3} mt={2}
            borderRadius='12px'
        >
            <Text size={"lg"} fontWeight={"bold"}>Thông báo !</Text>
            <Text size={"sm"}> Hiệp đẹp trai sẽ miễn phí ship trọn đời cho 100 khách hàng đầu tiên đăng ký thành viên tại Hiệp Hòa Farm. mlem mlem...</Text>
        </Box>
    )
}
export default Notify