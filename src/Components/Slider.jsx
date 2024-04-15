import {
	Navigation,
	Pagination,
	A11y,
	Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/slider/Slide1.jpg";
import slide2 from "../assets/slider/Slide2.jpg";
import slide3 from "../assets/slider/Slide3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/autoplay";

const Slider = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, A11y, Autoplay]}
			spaceBetween={0}
			loop={true}
			slidesPerView={1}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
		>
			<SwiperSlide>
				<img
					className="mx-auto max-h-[450px] w-full"
					src={slide1}
					alt="Slider-1"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					className="mx-auto max-h-[450px] w-full"
					src={slide2}
					alt="Slider-2"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					className="mx-auto max-h-[450px] w-full"
					src={slide3}
					alt="slider-3"
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default Slider;
