import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';

import banner1 from "@/assets/banners/SLI1788152862HAREENA_KOZHUKATTAI_FLOUR.png"
import banner2 from "@/assets/banners/SLI1788498801HAREENA_HEALTH_MIX_OFFER.png"
import banner3 from "@/assets/banners/SLI1791179831HAREENA_OCTOBER_BANNER.png"

export function Banner() {
    return (
        <Swiper
            autoplay
            loop
            navigation
            pagination={{
                clickable: true,
            }}
            keyboard
            modules={[Autoplay, Navigation, Pagination, Keyboard]}
            className="mySwiper h-[80vh]"
        >
            <SwiperSlide><img className='d-block w-full h-full object-cover' src={banner1} alt='banner 1' /></SwiperSlide>
            <SwiperSlide><img className='d-block w-full h-full object-cover' src={banner2} alt='banner 2' /></SwiperSlide>
            <SwiperSlide><img className='d-block w-full h-full object-cover' src={banner3} alt='banner 3' /></SwiperSlide>
        </Swiper>
    )
}
