import {
    Box,
    Text,
    Image,
} from "@chakra-ui/react";
function ComingSoon(){
    return(
        <Box textAlign='center'>
            <Text fontSize='lg' fontWeight='bold'
                  m={3}  
            >Chức năng sẽ được hỗ trợ trong thời gian tới !!</Text>
                <Image
                margin='auto'
                objectFit='cover'
                src='../twoCatSleep.gif'
                alt='Hiệp Hoà Farm'
                />
        </Box>

    )
}
export default ComingSoon;