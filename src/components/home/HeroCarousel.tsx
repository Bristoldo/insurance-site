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

import { useTranslation } from "react-i18next";

export default function HeroCarousel() {


    const { t } = useTranslation();

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div
            className={
                activeSlide === 1
                    ? "carousel-red-arrows"
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

                    <div className="header-carousel-item" style={{ minHeight: "700px", backgroundColor: "#212529" }}>

                        <div className="carousel-caption">

                            <div className="container">

                                <div className="row g-4 align-items-center">

                                    <div className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">

                                        <div className="text-sm-center text-md-start">

                                            <h4 className="text-white text-uppercase fw-bold mb-4">
                                                {t("heroCarousel.subtitle1")}
                                            </h4>

                                            <h1 className="display-1 text-white mb-4">
                                                {t("heroCarousel.title1")}

                                            </h1>

                                            <p className="mb-5 fs-5">
                                                {t("heroCarousel.description1")}

                                            </p>

                                            {/* CTA */}
                                            {/* <button className="btn btn-danger btn-lg">
                                                Obtenir un devis gratuit
                                            </button> */}

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

                    <div className="header-carousel-item " style={{ minHeight: "700px", backgroundColor: "#b02a37" }}>

                        <div className="carousel-caption">

                            <div className="container">

                                <div className="row g-4 align-items-center">

                                    <div className="col-lg-7">

                                        <div className="text-sm-center text-md-start">

                                            <h4 className="text-white text-uppercase fw-bold mb-4">
                                                {t("heroCarousel.subtitle2")}
                                            </h4>

                                            <h1 className="display-1 text-white mb-4">
                                                {t("heroCarousel.title2")}

                                            </h1>

                                            <p className="mb-5 fs-5">
                                                {t("heroCarousel.description2")}
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

                {/* Slide 3 */}
                <SwiperSlide>

                    <div className="header-carousel-item " style={{ minHeight: "700px", backgroundColor: "#343a40" }}>

                        <div className="carousel-caption">

                            <div className="container">

                                <div className="row g-4 align-items-center">

                                    <div className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">

                                        <div className="text-sm-center text-md-start">

                                            <h4 className="text-white text-uppercase fw-bold mb-4">
                                                {t("heroCarousel.subtitle3")}
                                            </h4>

                                            <h1 className="display-1 text-white mb-4">
                                               {t("heroCarousel.title3")}

                                            </h1>

                                            <p className="mb-5 fs-5">
                                                {t("heroCarousel.description3")}

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


                {/* Slide 4 */}
                <SwiperSlide>

                    <div className="header-carousel-item " style={{ minHeight: "700px", backgroundColor: "#b02a37" }}>

                        <div className="carousel-caption">

                            <div className="container">

                                <div className="row g-4 align-items-center">

                                    <div className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">

                                        <div className="text-sm-center text-md-start">

                                            <h4 className="text-white text-uppercase fw-bold mb-4">
                                                {t("heroCarousel.subtitle4")}
                                            </h4>

                                            <h1 className="display-1 text-white mb-4">
                                                {t("heroCarousel.title4")}

                                            </h1>

                                            <p className="mb-5 fs-5">
                                                {t("heroCarousel.description4")}

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


                {/* Slide 5 */}
                <SwiperSlide>

                    <div className="header-carousel-item " style={{ minHeight: "700px", backgroundColor: "#2b1d12" }}>

                        <div className="carousel-caption">

                            <div className="container">

                                <div className="row g-4 align-items-center">

                                    <div className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">

                                        <div className="text-sm-center text-md-start">

                                            <h4 className="text-white text-uppercase fw-bold mb-4">
                                                {t("heroCarousel.subtitle5")}
                                            </h4>

                                            <h1 className="display-1 text-white mb-4">
                                                {t("heroCarousel.title5")}

                                            </h1>

                                            <p className="mb-5 fs-5">
                                                {t("heroCarousel.description5")}

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
            </Swiper >
        </div>
    );
}