import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addAllCategory, selectAllCategory } from "./categorySlice";
import ProductApi from "../../pages/api/productApi";
import { Box } from "@chakra-ui/react";
import { memo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Text } from "@chakra-ui/react";

const categories = [
  {
    categoryName: "Bán chạy",
    idCategory: 1
  },
  {
    categoryName: "Sầu riêng",
    idCategory: 2
  },
  {
    categoryName: "Đặc sản",
    idCategory: 3
  },
  {
    categoryName: "Trái cây",
    idCategory: 4
  },
  {
    categoryName: "Sầu riêng",
    idCategory: 5
  },
  {
    categoryName: "Đặc sản",
    idCategory: 6
  }
];

// export default function CategoryBar() {
function CategoryBar() {

  const [currentCate, setCurrentCate] = useState("Bán chạy");

  const dispatch = useDispatch();
  // const categories = useSelector(selectAllCategory);

  useEffect(() => {
    if (categories.length == 0) {
      const fetchCategoryList = async () => {
        try {
          const res = await ProductApi.getCategories();
          dispatch(addAllCategory(res));
          console.log("API success !!!");
          // dispatch(offLoading())
          // console.log("data" + JSON.stringify(res));
        } catch (error) {
          console.log("Product API Fail !!");
          console.log(error);
        }
      };
      fetchCategoryList();
    }
  }, []);

  return (
    <>
    <Box borderRadius="14px" 
          mb={2} p={2} pl={4} pr={4} 
          background="#ffde46"
          // position="sticky" top={1} zIndex={1}
    >
      <Swiper
        modules={[FreeMode, Navigation]}
        freeMode={true}
        // navigation={true}
        slidesPerView={4}
        spaceBetween={20}
        className="mySwiper"
      >
        {categories.map((item) => {
          return (
            <SwiperSlide key={item.idCategory}>
              <Box
                // borderRadius="14px"
                // background="#f9f9f7"
                // cursor="pointer"
                // verticalAlign="center"
                // textAlign="center"
                className={currentCate===item.categoryName?('cateActive'):('cateItem')}
                onClick={() => setCurrentCate(item.categoryName)}
                >
                <Text p={2} fontWeight="bold">
                  {item.categoryName}
                </Text>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
    <Box
      p={3}
      borderTop="1px solid #5f5438"
      textAlign="center"
      mb={2}
    >
      <Text fontSize="3xl" fontWeight="bold" >Danh mục - {currentCate}</Text>
    </Box>
    </>
  );
}
export default memo(CategoryBar);