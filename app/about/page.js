'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Feature from '@/components/sections/home4/Feature'
import Team from '@/components/sections/home2/Team'
import Testimonial from '@/components/sections/home3/Testimonial'
export default function About_Page() {

    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={1} footerStyle={1}>

        <section className="about_page_banner" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="banner_content centred">
                    <div className="tag_text"><h6>About us</h6></div>
                    <h1>Reimagining the power of <br/>Finance Service</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <div className="banner_image">
                        <img src="assets/images/resource/about_banner_image.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section className="why_choose_us about_page" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="shape_circle float-bob-y"><img src="assets/images/icons/ring_shape.png" alt=""/></div>
            <div className="mouse_pointer float-bob-x"><img src="assets/images/icons/mouse-pointer.png" alt=""/></div>
            <div className="container">
                <div className="border_top"></div>
                <div className="section_title centred">
                    <div className="tag_text"><h6>Why Choose us</h6></div>
                    <h2>We are the best in Market</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="why_choose_block_two mb_40" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <div className="choose_icon">
                                <i className="icon-28"></i>
                            </div>
                            <h4>Expert Consultant</h4>
                            <p>Duis aute irure dolor in velit onerepreh enderit in voluptate more esse</p>
                            <div className="link_btn"><Link href="/">Discover More <i className="fa-solid fa-angle-right"></i></Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="why_choose_block_two mb_40 hover" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="choose_icon">
                                <i className="icon-27"></i>
                            </div>
                            <h4>Worldpay Solutions</h4>
                            <p>Duis aute irure dolor in velit onerepreh enderit in voluptate more esse</p>
                            <div className="link_btn"><Link href="/">Discover More <i className="fa-solid fa-angle-right"></i></Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="why_choose_block_two mb_40" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                            <div className="choose_icon">
                                <i className="icon-26"></i>
                            </div>
                            <h4>Innovative Fintech</h4>
                            <p>Duis aute irure dolor in velit onerepreh enderit in voluptate more esse</p>
                            <div className="link_btn"><Link href="/">Discover More <i className="fa-solid fa-angle-right"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Feature/>
        <Team/>

        <section className="app_section style_three" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="shape_icon_12"><img src="assets/images/icons/shape_icon_12.png" alt=""/></div>
            <div className="container">
                <div className="app_inner_box">
                    <div className="app_outer_box">
                        <div className="shape_one float-bob-x"></div>
                        <div className="shape_two float-bob-y"></div>
                        <div className="shape_three rotate-me"></div>
                        <div className="content_box">
                            <h2>Download Banking App</h2>
                            <p>Upgrade to a seamless user experience that delivers a 360-degree view of household accounts for the advisor and client and supports more collaborative engagements.</p>
                        </div>            
                        <div className="app_links">
                            <div className="apple_link"><Link href="/"><img src="assets/images/icons/apple_icon.png" alt=""/></Link></div>
                            <div className="play_link"><Link href="/"><img src="assets/images/icons/play_icon.png" alt=""/></Link></div>
                        </div>
                    </div>
                    <div className="app_image float-bob-x"><img src="assets/images/resource/app_image.png" alt=""/></div>
                </div>        
            </div>
        </section>
        <Testimonial/>

        </Layout>
    </div>
    )
}