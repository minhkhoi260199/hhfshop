import { FaMapMarkedAlt } from "react-icons/fa";
import {
  Button,
  Flex,
  Link,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSlider } from "../../components/productDetail/detailSlice";
import invoiceApi from "../api/invoiceApi";

function Contact() {
  const dispatch = useDispatch();
  const toast = useToast();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    dispatch(closeSlider());
  }, []);
  const login = async () =>{
    let data = {
      "fullname" : fullname,
      "phone" : phone,
      "email" : email,
      "title" : title,
      "content" : content
    }
    try {
        const response = await invoiceApi.saveContact(data);
        // console.log("data"+ JSON.stringify(response));
        if(response != null){
            toast({
                title: `THÀNH CÔNG`,
                description: "Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất !",
                status: "success",
                position: "bottom",
                variant: "left-accent",
                duration: 4000,
                isClosable: true,
                });
                setIsActive(false);
        }
    } catch (error) {
        toast({
            title: `Thất bại !!`,
            status: "error",
            position: "bottom",
            variant: "left-accent",
            duration: 5000,
            isClosable: true,
            });   
        console.log("API Fail !!");
        console.log(error);
    }
}
  const handleSubmit = () => {
    if(fullname=="" || phone=="" || email=="" || title==""||content==""){
        toast({
            title: `Thông tin trống ?`,
            status: "error",
            position: "bottom",
            variant: "left-accent",
            duration: 5000,
            isClosable: true,
            });          
        console.log("Invalidate!");
    } else {
        login();
    }
}
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem colSpan={{ base: "2", md: "1" }} p={3} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          LIÊN HỆ
        </Text>
        <Text fontSize="lg" fontWeight="bold" mt={5} mb={2}>
          * HỆ THỐNG CỬA HÀNG:
        </Text>
        <Text fontSize="md" fontWeight="bold" as="u">
          CHI NHÁNH HỒ CHÍ MINH:
        </Text>
        {/* <Text fontSize="md">A06 Đường TTN17 Khu 10HA, KP4, Tân Thới Nhất Q12</Text> */}
        <Flex pl={3}><FaMapMarkedAlt/>&nbsp;&nbsp;&nbsp;<Link href='https://goo.gl/maps/bnJrJ9qLGZkjrDGT6' fontSize='sm' color='red.700' isExternal >Dẫn đường đến shop</Link></Flex>
        <Text fontSize="md" mb={2}>
        92/6 Lò Siêu, phường 16, Quận 11, Thành phố Hồ Chí Minh
        </Text>
        {/* <Text fontSize="md" fontWeight="bold" as="u">
          CHI NHÁNH TÂY NINH:
        </Text>
        <Text fontSize="md" mb={8}>
          444 Đường 30/4, Tây Ninh
        </Text> */}
        <Text fontSize="lg" fontWeight="bold" as="u">
          * LIÊN HỆ HỖ TRỢ ONLINE:
        </Text>
        <Text fontSize="md">Giờ làm việc: 6A.M - 6P.M</Text>
        <Text fontSize="md">0399 945 680 - 0969 069 589</Text>
        <Text fontSize="md">hiephoafarm@gmail.com</Text>
      </GridItem>
      <GridItem
        colSpan={{ base: "2", md: "1" }}
        border="red solid 1px"
        p={3}
        borderRadius={10}
      >
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          GỬI THÔNG TIN
        </Text>
        <FormControl border="gray solid 1px" p={3} borderRadius={10}>
          <FormLabel htmlFor="name">Họ và tên: </FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Tên thường gọi"
            onChange={(e) => setFullname(e.target.value)}
          />
          <FormLabel htmlFor="name">Số điện thoại: </FormLabel>
          <Input
            id="phone"
            type="number"
            placeholder="Số điện thoại"
            onChange={(e) => setPhone(e.target.value)}
          />
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Email công việc của bạn"
          />
          <FormLabel htmlFor="subject">Tiêu đề</FormLabel>
          <Input
            id="subject"
            type="text"
            placeholder="Nội dung đề cập"
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormLabel htmlFor="message">Lời nhắn</FormLabel>
          <Textarea
            id="message"
            type="text"
            placeholder="Nguyện vọng của bạn"
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            onClick={() => handleSubmit()}
            isDisabled={!isActive}
          >
            Gửi
          </Button>
        </FormControl>
      </GridItem>
    </Grid>
  );
}
export default Contact;
