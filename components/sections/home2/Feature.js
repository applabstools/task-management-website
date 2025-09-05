'use client'
import React from 'react'
import { useState } from "react"


export default function Feature() {
    const [isActive, setIsActive] = useState({
            status: false,
            key: 1,
        })
    
        const handleToggle = (key) => {
            if (isActive.key === key) {
                setIsActive({
                    status: false,
                })
            } else {
                setIsActive({
                    status: true,
                    key,
                })
            }
        }
    return (
        <> 

        <section className="feature_section_two">
            <div className="star_shape rotate-me"><img src="assets/images/icons/star_icon.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="feature_image_block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="icon_box_one float-bob-y"><i className="icon-44"></i></div>
                            <div className="icon_box_two float-bob-y"><i className="icon-29"></i></div>
                            <div className="feture_image">
                                <img src="assets/images/resource/feature_image_1.jpg" alt=""/>
                            </div>                    
                            <div className="chart_image_five float-bob-x">
                                <img src="assets/images/resource/chart_5.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 offset-xl-1">
                        <div className="feature_content_block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                            <div className="section_title">
                                <div className="tag_text"><h6>Features</h6></div>
                                <h2>The Specialists in fund administration</h2>
                            </div>
                            <ul className="accordion_box">
                                <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>                        
                                        <h4>1.     Improve operational performance</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>More than of the public reviews by our users mention amazing and super fast customer support as one of our</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="650">
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>                        
                                        <h4>2.     Focus on core competencies</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>More than of the public reviews by our users mention amazing and super fast customer support as one of our</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>                       
                                        <h4>3.     Go to market quickly</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>More than of the public reviews by our users mention amazing and super fast customer support as one of our</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
