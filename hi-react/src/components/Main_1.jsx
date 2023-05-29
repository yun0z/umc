import 슬라이드배너_1 from '../images/슬라이드배너_1.jpg';
import 슬라이드배너_2 from '../images/슬라이드배너_2.jpg';
import 슬라이드배너_3 from '../images/슬라이드배너_3.jpg';
import 슬라이드배너_4 from '../images/슬라이드배너_4.jpg';

/*import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';*/
const Main_1 = () => {
  return (
    <div className="main_1">
      {/* 
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
  ></Swiper>*/}
      <img src={슬라이드배너_1} /> <img src={슬라이드배너_2} /> <img src={슬라이드배너_3} />
      <img src={슬라이드배너_4} />
    </div>
  );
};
export default Main_1;
