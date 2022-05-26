import { useEffect, useState, memo } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addAllCategory, onLoadingCategory, selectAllCategory, selectIsLoadingCate } from "./categorySlice";
import { addSearchedProduct, onLoadingProduct, selectIsLoadingProduct} from "../item/productSlice";
import ProductApi from "../../pages/api/productApi";
import { Box, Spinner, Grid, GridItem, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// const categories = [
//   {
//     categoryName: "Bán chạy",
//     idCategory: 1
//   },
//   {
//     categoryName: "Sầu riêng",
//     idCategory: 2
//   },
//   {
//     categoryName: "Đặc sản",
//     idCategory: 3
//   },
//   {
//     categoryName: "Trái cây",
//     idCategory: 4
//   },
//   {
//     categoryName: "Sầu riêng",
//     idCategory: 5
//   },
  // {
  //   categoryName: "Đặc sản",
  //   idCategory: 6
  // }
// ];

// export default function CategoryBar() {
function CategoryBar() {

  const [currentCate, setCurrentCate] = useState({categoryName: "Bán chạy", idCategory: 21});

  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategory);
  const isLoading = useSelector(selectIsLoadingProduct);

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

  useEffect(()=>{
    if(!isLoading){
      const loadingProductByCate = async () =>{
              dispatch(onLoadingProduct());
              try {
                  const response = await ProductApi.getByCategory(currentCate.idCategory);
                  // console.log("data"+ JSON.stringify(response));
                  dispatch(addSearchedProduct(response));
                  console.log("Search API success !!!");
                  // setIsLoading(false)
                  // console.log("data"+ response);
              } catch (error) {
                  console.log("Search API Fail !!");
                  console.log(error);
              }
      }
      loadingProductByCate();
    }
  }, [currentCate])

  return (
    <>
    <Box borderRadius="14px" 
          mb={2} p={2} pl={4} pr={4} 
          background="#ffde46"
          // position="sticky" top={1} zIndex={1}
    >
      {isLoading?(
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          <GridItem className="cateItem">
            <Spinner size='lg' color="pink" />
          </GridItem>
          <GridItem className="cateItem">
            <Spinner size='lg' color="pink" />
          </GridItem>
          <GridItem className="cateItem">
            <Spinner size='lg' color="pink" />
          </GridItem>
          <GridItem className="cateItem">
            <Spinner size='lg' color="pink" />
          </GridItem>
        </Grid>
      ):
      (<Swiper
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
                cursor={isLoading?("wait"):("pointer")}
                className={currentCate.categoryName===item.categoryName?('cateActive'):('cateItem')}
                onClick={() => setCurrentCate(item)}
                >
                <Text p={2} fontWeight="bold">
                  {item.categoryName}
                </Text>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
      )}
    </Box>
    <Box
      p={3}
      borderTop="1px solid #5f5438"
      textAlign="center"
      mb={2}
    >
      <Text fontSize="3xl" fontWeight="bold" >Danh mục - {currentCate.categoryName}</Text>
    </Box>
    </>
  );
}
export default memo(CategoryBar);