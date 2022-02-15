import { EmailIcon, LinkIcon, PhoneIcon, StarIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    SimpleGrid,
    Spacer,
    Text,
} from "@chakra-ui/react";

const tabs = [
    {
        "name" : "Danh mục",
        "path" : "/"
    },{
        "name" : "Bài viết",
        "path" : "/info/comingSoon"
    },{
        "name" : "Giới thiệu",
        "path" : "/info/comingSoon"
    },{
        "name" : "Liên hệ",
        "path" : "/info/comingSoon"
    }
]

function Footer(){

    const year = new Date().getFullYear();

    return(
        <Box bg='#ffde46' w='100%' pb={{base:'74px', md:'0'}} color='black'>
            <Flex margin='auto' maxW='1250px' p={5} >
                <SimpleGrid columns={{base:'1', md:'3'}} spacing={10}
                            width="100%" 
                >
                    <Box height='80px'>
                        <Text fontSize='xl' pb={2} fontWeight='bold'>Giới thiệu</Text>
                        <Text>

                        </Text>
                    </Box>
                    <Box height='80px'>
                        <Text fontSize='xl' pb={2} fontWeight='bold'>Thông tin liên hệ</Text>
                        <Flex><PhoneIcon/><Text fontSize='sm'>&nbsp;&nbsp;(+84) 585 700 679</Text></Flex>
                        <Flex><EmailIcon/><Text fontSize='sm'>&nbsp;&nbsp;hiephoafarm@gmail.com</Text></Flex>
                        <Flex><LinkIcon/><Text fontSize='sm'>&nbsp;&nbsp;https://www.instagram.com/hiephoafarm/</Text></Flex>
                    </Box>
                    <Box height='160px'>
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
            <Flex margin='auto' p={2} maxW='1300px' fontStyle='italic' color='#847f72' fontSize='sm'>
                <Spacer/>
                <Text>
                    {year} © Hiệp Hoà Farm store - Made by Khôi Nguyễn with 🖤
                </Text>
                <Spacer/>
            </Flex>
        </Box>
    );
}
export default Footer;