import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const images = [
  {
    name: "banner0.jpg",
  },
  // {
  //   name: "banner1.jpg",
  // },
  // {
  //   name: "banner2.jpg",
  // },
];

function Slider() {
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <Box position="relative">
      <Box zIndex={0}>
        <Swiper modules={[Pagination, Autoplay]}
                pagination={{clickable : true}}
                autoplay={{delay : 12000}}
        >
          {images.map((img) => {
            return (
              <SwiperSlide
              key={img.name}
              >
                <Image
                  // borderRadius='14'
                  // objectFit='cover'
                  width="100%"
                  height="auto"
                  src={"./slide/" + img.name}
                  alt={img.name}
                  />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Box display={{ base: "none", xl: "block" }}>
        <Button
          position="absolute"
          right="100px"
          bottom="150px"
          background="cyan"
          color="red"
          height="80px"
          width="200px"
          borderRadius="22px"
          className="kreep"
          onClick={executeScroll}
          zIndex={1}
        >
          <Box
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            margin="auto"
            height="25px"
          >
            <Text fontSize="xl" fontWeight="bold" textAlign="center">
              XEM CỬA HÀNG
            </Text>
          </Box>
        </Button>
        <Box
          position="absolute"
          right="160px"
          bottom="80px"
          className="arrow bounce"
          color="cyan.100"
          fontSize="4.5em"
          zIndex={1}
        >
          <FaAngleDoubleDown />
        </Box>
      </Box>
      <Box ref={myRef}></Box>
    </Box>
  );
}
export default Slider;
