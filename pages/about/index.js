import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSlider } from "../../components/productDetail/detailSlice";

function About() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSlider());
    },[])
  return (
    <Box p={10} pt={2} pb={20}>
      <Image
        m="auto"
        boxSize="10rem"
        src="https://minhkhoi260199.github.io/img/linh_logo.png"
        alt="linhFarm_logo"
        pb={5}
      />
      <Text fontSize="4xl" fontWeight="bold" textAlign="center">
        CAM KẾT CHẤT LƯỢNG <br /> DỊCH VỤ ĐẲNG CẤP
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        SỨ MỆNH
      </Text>
      <Text>
        Thực phẩm xanh – sạch – ngon vẫn luôn là những tiêu chí hàng đầu giúp
        người tiêu dùng chọn lựa thực phẩm mỗi ngày. Thế nhưng khoảng thời gian
        gần đây lại có rất nhiều thương lái lợi dụng lòng tin của người tiêu
        dùng tráo các thực phẩm bẩn, kém chất lượng gây ảnh hưởng nghiêm trọng
        đến sức khỏe của mọi người.
      </Text>
      <Text>
        Đặc biệt với thị trường trái cây nhập khẩu thì tình trạng này lại tràn
        lan gây hoang mang cho người tiêu dùng. Nhận thấy những điều này,
        LinhFarm đã ra đời với sứ mệnh mang đến sức khỏe cho mọi nhà qua những
        loại trái cây ngoại nhập thượng hạng, chất lượng với tiêu chuẩn 3C:
        CHUẨN TƯƠI – CHUẨN NGON – CHUẨN SẠCH.
      </Text>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" m={3}>
        QUÀ TẶNG TRÁI CÂY – CÓ ĐÂY LINHFARM
      </Text>
      <Text fontSize="xl" fontWeight="bold" textAlign="center">
        KHỎE HƠN – ĐẸP HƠN – HẠNH PHÚC HƠN!
      </Text>
      <Text fontSize="3xl" fontWeight="bold" mt={3}>
        CHÂN THÀNH
      </Text>
      <Text>
        Với mong ước “trao yêu thương”, LinhFarm mong rằng sự chân thành và tử
        tế của chúng tôi sẽ giúp Quý khách hạnh phúc hơn, vui hơn mỗi ngày.
      </Text>
      <Text>
        Từ những loại trái cây nhập khẩu chất lượng đến những món quà từ trái
        cây đều được chúng tôi nâng niu, tỉ mẩn thực hiện… hy vọng sẽ giúp lan
        tỏa sự yêu thương ấy đến với từng gia đình, bạn bè, đồng nghiệp và đối
        tác của Quý khách.
      </Text>
      <Text fontSize="3xl" fontWeight="bold" mt={8}>
        SÁNG TẠO TRONG YÊU THƯƠNG
      </Text>
      <Text>
        Khi đến với LinhFarm, Quý khách không chỉ tìm thấy những loại trái cây
        nhập khẩu tươi ngon mà còn có những món quà xinh đẹp và ý nghĩa nữa.
        Những loại trái cây nhập đã được LinhFarm lựa chọn kỹ lưỡng, khéo léo
        sắp xếp thành những hộp quà, khay quà hay giỏ quà vừa sang trọng vừa
        mang một thông điệp riêng.
      </Text>
      <Text>
        Sản phẩm quà tặng từ LinhFarm sẽ giúp Quý khách trao gửi đến người nhận
        những tình cảm chân thành. Chúng tôi sẽ luôn đồng hành cùng Quý khách
        trong những ngày hạnh phúc nhất, khi cưới hỏi hay lúc gặp mặt đối tác…
        cho đến những lần cần chia buồn. Mỗi cảm xúc của Quý khách luôn được
        LinhFarm quan tâm, trân trọng và mong muốn chia sẻ qua những sản phẩm
        của chúng tôi tạo nên.
      </Text>
      <Text fontSize="3xl" fontWeight="bold" mt={8}>
        KẾT NỐI MỌI KHOẢNG CÁCH…
      </Text>
      <Text>
        Từ những điều đơn giản nhưng ấm áp, LinhFarm rất mong ước có thể trở nên
        sự gắn kết giữa chúng tôi với Quý khách, giữa Quý khách với gia đình,
        bạn bè, đồng nghiệp và đối tác của mình. Sự kết nối ấy sẽ giúp cho các
        mối quan hệ thêm bền chặt và thân thiết hơn, mang đến yêu thương từ
        những việc nhỏ bé mà chúng ta dành cho nhau.
      </Text>
      <Text>
        Với LinhFarm, mỗi ngày đều là một cơ hội để yêu thương và sẻ chia. Yêu
        thương những người xung quanh. Và sẻ chia yêu thương ấy qua những việc
        mình làm. Điều đó chính là những sản phẩm chúng tôi làm ra, trao gửi đến
        tất cả mọi người, mọi nhà.Hãy đến với LinhFarm để chúng tôi được yêu
        thương, nâng niu và chăm sóc Quý khách!
      </Text>
    </Box>
  );
}
export default About;
