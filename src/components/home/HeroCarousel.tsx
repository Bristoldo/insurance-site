import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { useState } from "react";

import "swiper/css/effect-fade";
import {
    Autoplay,
    Pagination,
    Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroCarousel() {

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div
            className={
                activeSlide === 1
                    ? "carousel-blue-arrows"
                    : "carousel-dark-arrows"
            }
        >
            <Swiper
                style={{
                    width: "100%",
                    height: "600px",
                }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}

                onSlideChange={(swiper) => {
                    setActiveSlide(swiper.realIndex);
                }}

                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}

                navigation

                pagination={{ clickable: true }}

                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}

                speed={1200}

                loop={true}
            >
                {/* Slide 1 */}
                <SwiperSlide>

                    <div className="header-carousel-item bg-primary" style={{ minHeight: "700px" }}>

                        <div className="carousel-caption">

                            <div className="container">

                                <div className="row g-4 align-items-center">

                                    <div className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">

                                        <div className="text-sm-center text-md-start">

                                            <h4 className="text-white text-uppercase fw-bold mb-4">
                                                Welcome To LifeSure
                                            </h4>

                                            <h1 className="display-1 text-white mb-4">
                                                Life Insurance Makes You Happy
                                            </h1>

                                            <p className="mb-5 fs-5">
                                                Insurance solutions for your future.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="col-lg-5 wow fadeInRight" data-wow-delay="0.2s">

                                        <img
                                            src="/img/carousel-2.png"
                                            className="img-fluid w-100"
                                            alt=""
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>

                    <div className="header-carousel-item bg-dark" style={{ minHeight: "700px" }}>

                        <div className="carousel-caption">

                            <div className="container">

                                <div className="row g-4 align-items-center">

                                    <div className="col-lg-7">

                                        <div className="text-sm-center text-md-start">

                                            <h4 className="text-white text-uppercase fw-bold mb-4">
                                                Secure Your Family Today
                                            </h4>

                                            <h1 className="display-1 text-white mb-4">
                                                Life Insurance Makes You Happy
                                            </h1>

                                            <p className="mb-5 fs-5">
                                                Insurance solutions for your future.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="col-lg-5">

                                        <img
                                            src="/img/blog-4.png"
                                            className="img-fluid w-100"
                                            alt=""
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </SwiperSlide>

            </Swiper >
        </div>
    );
}