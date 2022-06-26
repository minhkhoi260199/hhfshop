import {
    Box,
    Text,
    Image,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSlider } from "../../components/productDetail/detailSlice";
function ComingSoon(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSlider());
    },[])
    return(
        <Box textAlign='center'>
            <Text fontSize='lg' fontWeight='bold'
                  m={3}  
            >Tính năng sẽ được hỗ trợ trong thời gian tới !!</Text>
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