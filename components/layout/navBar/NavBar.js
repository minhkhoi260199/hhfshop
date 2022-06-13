import {useState} from "react";
import Link from "next/link";
import {
    Box,
    Center,
    Flex,
    Grid,
    GridItem,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList, Text
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import Auth from "../../auth/Auth";
import Authed from "../../auth/authed";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../../auth/authSlice";

const tabs = [
    {
        "name" : "Cửa hàng",
        "path" : "/"
    },{
        "name" : "Bài viết",
        "path" : "/info/comingSoon"
    },{
        "name" : "Giới thiệu",
        "path" : "/info/comingSoon"
    },{
        "name" : "Cộng tác",
        "path" : "/info/comingSoon"
    }
]

function NavBar(){

    const [stateNav, setStateNav] = useState("Cửa hàng");
    const isLogin = useSelector(selectIsLogin);
    return(
        <Box bg='#ffde46' w='100%' color='#5f5338' fontWeight='bold'>
               <Flex margin='auto' maxW='1050px'>
                   <Box w='20%'>
                       <Image
                           p='0.5'
                           margin='auto'
                           boxSize='70px'
                           objectFit='cover'
                        //    src='../logo.jpg'
                           src='../LogoHHF.png'
                           alt='Hiệp Hoà Farm'
                       />
                   </Box>
                   <Box w='60%' margin='auto'
                        display={{ base: 'none', md:'block'}}
                   >
                       <Grid templateColumns='repeat(4, 1fr)' gap={2}>
                           {tabs.map(tab => {
                               return(
                                   <GridItem w='100%' margin='auto' cursor='pointer' key={tab.name}>
                                       <Link href={tab.path}>
                                           <Center h='9' textAlign='center'
                                                   onClick={() => setStateNav(tab.name)}
                                                   className={stateNav===tab.name?('navActive'):('navItem')}
                                           >
                                               {tab.name}
                                           </Center>
                                       </Link>
                                   </GridItem>
                               )
                           })}
                       </Grid>
                   </Box>
                   <Box w='20%' margin='auto'
                        display={{ base: 'none', md:'block'}}
                    >
                        {isLogin?<Authed/>:<Auth/>}
                    </Box>
                   <Box w='80%' margin='auto'
                        display={{ base: 'block', md:'none'}}
                   >
                       <Flex>
                           <Box w='80%' p={1} textDecoration='underline overline'>
                               <Text fontSize={{ base: 'sm', sm:'lg'}}
                               >MANG THỰC PHẨM SẠCH</Text>
                               <Text fontSize={{ base: 'sm', sm:'lg'}}
                                     textAlign='right'
                               >ĐẾN NGÔI NHÀ CỦA BẠN</Text>
                           </Box>
                           <Box backgroundColor='#eef0c6' margin='auto' borderRadius='10'>
                               <Menu>
                                   <MenuButton
                                       as={IconButton}
                                       aria-label='Options'
                                       icon={<FaBars />}
                                       variant='outline'
                                       />
                                   <MenuList background="#a6e9ca" zIndex={2}>
                                       {tabs.map(tab => {
                                           return(
                                               <Link href={tab.path} key={tab.name}>
                                                <MenuItem 
                                                    onClick={() => {setStateNav(tab.name)}}
                                                    className={stateNav===tab.name?('navActive'):('navItem')}
                                                >{tab.name}</MenuItem>
                                            </Link>
                                           )
                                       })}
                                   </MenuList>
                               </Menu>
                           </Box>
                       </Flex>
                   </Box>
               </Flex>

        </Box>
    );
}
export default NavBar;