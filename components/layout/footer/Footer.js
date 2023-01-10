import {
    Box,
    Flex,
    Link,
    SimpleGrid,
    Image,
    Text,
} from "@chakra-ui/react";
import { FaEnvelope, FaLink, FaMapMarkerAlt, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

function Footer(){

    const year = new Date().getFullYear();

    return(
        <Box bg='#ffde46' w='100%' pb={{base:'74px', md:'0'}} color='black'>
            <Flex margin='auto' maxW='1250px' p={5} >
                {/* <SimpleGrid columns={{base:'1', md:'2'}} spacing={80}
                            width="100%" 
                > */}
                <SimpleGrid columns={{base:'1', md:'3'}} spacing={10}
                            width="100%" 
                >
                    <Box height='110px' mt={2}>
                        <Text fontSize='xl' pb={2} fontWeight='bold'>Thông tin liên hệ</Text>
                        {/* <Flex><FaPhoneAlt/><Text fontSize='sm'>&nbsp;&nbsp;(+84) 585 700 679</Text></Flex> */}
                        <Flex><FaPhoneAlt/><Text fontSize='sm'>&nbsp;&nbsp;(+84) 0399 945 680</Text></Flex>
                        <Flex><FaEnvelope/><Text fontSize='sm'>&nbsp;&nbsp;hiephoafarm@gmail.com</Text></Flex>
                        <Flex><FaLink/><Text fontSize='sm'>&nbsp;&nbsp;https://www.instagram.com/hiephoafarm/</Text></Flex>
                        <Flex><FaMapMarkerAlt/><Text fontSize='sm'>&nbsp;&nbsp;Thành phố Hồ Chí Minh</Text></Flex>
                        <Flex><FaMapMarkedAlt/>&nbsp;&nbsp;&nbsp;<Link href='#' fontSize='sm' color='red.700' isExternal >Dẫn đường đến shop</Link></Flex>
                    </Box>
                    <Box height='200px' mt={2}>
                        <Text fontSize='xl' pb={2} fontWeight='bold'>Giới thiệu</Text>
                        <Flex ml={10}>
                            <Image
                            p='0.5'
                            width="75%"
                            height="auto"
                            objectFit='cover'
                            src='../card.png'
                            alt='Hiệp Hoà Farm'
                            />
                        </Flex>
                        <Text>
                        </Text>
                    </Box>
                    <Box height='160px' mt={2}>
                        <Text fontSize='xl' pb={2} fontWeight='bold'>Fanpage</Text>
                        <Flex position='relative'>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhiephoafarm&tabs&small_header=false&adapt_container_width=true&hide_cover=false&width=340&height=130&show_facepile=true&appId=220058775445865" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                    position='absolute'
                                    top='0' bottom='0' left='0' right='0'
                                    height='100%' width='100%'
                            ></iframe>
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Flex>
            <SimpleGrid columns={{base:'1', md:'2'}}
                        margin='auto' p={2} maxW='1300px' 
                        fontStyle='italic' color='#847f72' fontSize='sm' >
                <Box textAlign={{base:'left', md:'right'}}>
                    {year} © Hiệp Hoà Farm store &nbsp;
                </Box>
                <Box textAlign={{base:'right', md:'left'}}>
                    - Made by <Link href='https://www.linkedin.com/in/minhkhoi2601/' color='pink.300' isExternal >Khôi Nguyễn</Link> with 🖤
                </Box>
            </SimpleGrid>
        </Box>
    );
}
export default Footer;