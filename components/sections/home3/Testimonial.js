'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}


export default function Testimonial() {
    return (
        <> 

        <section className="testimonial_section_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="shape_icon_12 float-bob-y"><img src="assets/images/icons/shape_icon_12.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12 content_column">
                        <div className="testimonial_content" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="550">
                            <div className="section_title">
                                <div className="tag_text"><h6>Testimonials</h6></div>
                                <h2>Love from Clients</h2>
                            </div>
                            <Swiper {...swiperOptions} className='single-item-carousel'>
                                <SwiperSlide>
                                    <div className="testimonial_block_three">
                                        <div className="inner_box">
                                            <div className="quort_icon"><i className="icon-19"></i></div>
                                            <p>The great benefit of audio is that it's the cost effective way for your brand to the create compelling content. You don't need an entire production crew and tons of expensive equipment</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_block_three">
                                        <div className="inner_box">
                                            <div className="quort_icon"><i className="icon-19"></i></div>
                                            <p>The great benefit of audio is that it's the cost effective way for your brand to the create compelling content. You don't need an entire production crew and tons of expensive equipment</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_block_three">
                                        <div className="inner_box">
                                            <div className="quort_icon"><i className="icon-19"></i></div>
                                            <p>The great benefit of audio is that it's the cost effective way for your brand to the create compelling content. You don't need an entire production crew and tons of expensive equipment</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className='nav-style-one'>
                                <div className="owl-nav">
                                    <button type="button" className="owl-prev"><span className="icon-13"></span></button>
                                    <button type="button" className="owl-next"><span className="icon-13"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12 image_column">
                        <figure className="testimonial_image float-bob-y">
                            <img src="assets/images/resource/testimonial-4.png" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>    
        </section>

        </>
    )
}
