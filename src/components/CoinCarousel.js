import React, { useRef, useState, useEffect, useCallback } from "react";
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Inview from "./Inview";

function CoinCarousel() {
  const myRef = useRef();
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const card4Ref = useRef();

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;

    if (position > 1100 && position < 1850) {
      myRef.current.style.position = "fixed";
      myRef.current.style.top = "50%";

      (card2Ref.current.getBoundingClientRect().top / window.innerHeight) *
        100 <
        54 &&
      (card2Ref.current.getBoundingClientRect().top / window.innerHeight) *
        100 >
        31.7
        ? card2Ref.current.classList.add("scroll-active")
        : card2Ref.current.classList.remove("scroll-active");

      (card3Ref.current.getBoundingClientRect().top / window.innerHeight) *
        100 <
        56 &&
      (card3Ref.current.getBoundingClientRect().top / window.innerHeight) *
        100 >
        30
        ? card3Ref.current.classList.add("scroll-active")
        : card3Ref.current.classList.remove("scroll-active");

      (card4Ref.current.getBoundingClientRect().top / window.innerHeight) *
        100 <
      56
        ? card4Ref.current.classList.add("scroll-active")
        : card4Ref.current.classList.remove("scroll-active");

    } else if (position > 1850) {
      myRef.current.style.position = "absolute";
      myRef.current.style.top = "80%";
    } else {
      myRef.current.style.position = "absolute";
      myRef.current.style.top = 0;
    }
  });

  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <section className="coin-carousel">
      <div className="row">
        <div className="container">
          <div className="col-12 col-md-10 col-lg-8 m-auto">
            <div className="container">
              <div className="company text-center text-md-start">
                THIS IS WHY WE EXIST AS A COMPANY
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-block  d-lg-none">
        <div className="slider mobile">
          <Swiper
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar]}
            //
            className="swiper mySwiper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <div className="swiper-header">
                  Crypto Buy <br /> and Sale
                </div>
                <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto
                  currencies such as Bitcoin, Ethereum and many others.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <div className="swiper-header">
                  We buy gift <br /> cards at amazing value
                </div>
                <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto
                  currencies such as Bitcoin, Ethereum and many others.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <div className="swiper-header">
                  Bill payments <br /> simplified
                </div>
                <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto
                  currencies such as Bitcoin, Ethereum and many others.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <div className="swiper-header">
                  Transaction tracking <br /> at it’s best
                </div>
                <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto
                  currencies such as Bitcoin, Ethereum and many others.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="row d-none d-lg-block desktop-timeline">
        <div className="container">
          <div className="col-12 col-sm-12 col-md-10 col-lg-8 m-auto">
            <div className="container">
              <div className="timeline-wrapper">
                <div className="timeline">
                  <div ref={myRef} className="scroll-bar"></div>
                </div>

                <div className="slider desktop">
                  <div
                    ref={card1Ref}
                    // data-aos-easing="linear"
                    // data-aos-duration="1000"
                    // data-aos="fade-in"
                    className="scroll-box scroll-active"
                  >
                    <div className="scroll-header">
                      Crypto Buy <br /> and Sale
                    </div>
                    <div className="scroll-lead">
                      We provide a well constructed and safe platform
                      <br /> for crypto currencies such as Bitcoin, Ethereum{" "}
                      <br /> and many others.
                    </div>
                  </div>

                  <div
                    ref={card2Ref}
                    // data-aos-easing="linear"
                    // data-aos-duration="1000"
                    // data-aos="fade-in"
                    className="scroll-box "
                  >
                    <div className="scroll-header ">
                      We buy gift cards <br /> at amazing value
                    </div>
                    <div className="scroll-lead ">
                      We provide a well constructed and safe platform
                      <br /> for crypto currencies such as Bitcoin, Ethereum{" "}
                      <br /> and many others.
                    </div>
                  </div>

                  <div
                    ref={card3Ref}
                    // data-aos-easing="linear"
                    // data-aos-duration="1000"
                    // data-aos="fade-in"
                    className="scroll-box "
                  >
                    <div className="scroll-header">
                      Bill payments <br /> simplified
                    </div>
                    <div className="scroll-lead ">
                      We provide a well constructed and safe platform
                      <br /> for crypto currencies such as Bitcoin, Ethereum{" "}
                      <br /> and many others.
                    </div>
                  </div>

                  <div
                    ref={card4Ref}
                    // data-aos-easing="linear"
                    // data-aos-duration="1000"
                    // data-aos="fade-in"
                    className="scroll-box "
                  >
                    <div className="scroll-header">
                      Transaction <br /> tracking at it’s best
                    </div>
                    <div className="scroll-lead ">
                      We provide a well constructed and safe platform
                      <br /> for crypto currencies such as Bitcoin, Ethereum{" "}
                      <br /> and many others.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoinCarousel;
