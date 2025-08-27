'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export default function Blog_Grid() {
    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle14="Blog Grid">
        <section className="blog_section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_1.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Health</span></div>
                                    <h3><Link href="/blog-details">Helping people access the support they’re entitled to</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Ralph Edwards</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_2.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Digital Payment</span></div>
                                    <h3><Link href="/blog-details">A Financial Inclusion Plan for the whole sector</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Jun 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Theresa Webb</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_3.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Motivation</span></div>
                                    <h3><Link href="/blog-details">Meet Vince our Community Finance Engagement Manager</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Dec 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Arlene McCoy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_4.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Health</span></div>
                                    <h3><Link href="/blog-details">Helping people access the support they’re entitled to</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Ralph Edwards</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_5.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Digital Payment</span></div>
                                    <h3><Link href="/blog-details">A Financial Inclusion Plan for the whole sector</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Jun 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Theresa Webb</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_6.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Motivation</span></div>
                                    <h3><Link href="/blog-details">Meet Vince our Community Finance Engagement Manager</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Dec 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Arlene McCoy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_7.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Health</span></div>
                                    <h3><Link href="/blog-details">Helping people access the support they’re entitled to</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Ralph Edwards</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_8.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Digital Payment</span></div>
                                    <h3><Link href="/blog-details">A Financial Inclusion Plan for the whole sector</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Jun 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Theresa Webb</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_9.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Motivation</span></div>
                                    <h3><Link href="/blog-details">Meet Vince our Community Finance Engagement Manager</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Dec 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Arlene McCoy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_10.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Health</span></div>
                                    <h3><Link href="/blog-details">Helping people access the support they’re entitled to</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>March 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Ralph Edwards</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_11.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Digital Payment</span></div>
                                    <h3><Link href="/blog-details">A Financial Inclusion Plan for the whole sector</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Jun 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Theresa Webb</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                            <div className="inner_box">
                                <figure className="image_box"><Link href="/blog-details"><img src="assets/images/blog/blog_12.jpg" alt=""/></Link></figure>
                                <div className="lower_content">
                                    <div className="category"><span>Motivation</span></div>
                                    <h3><Link href="/blog-details">Meet Vince our Community Finance Engagement Manager</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Dec 20, 2024</li>
                                        <li><i className="icon-20"></i><Link href="/blog-details">Arlene McCoy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination-wrapper text-center">
                    <ul className="pagination">
                        <li><span className="page-numbers current">1</span></li>
                        <li><a className="page-numbers" href="/blog-grid">2</a></li>
                        <li><a className="page-numbers" href="/blog-grid">3</a></li>
                        <li><a className="page-numbers" href="/blog-grid">...</a></li>
                        <li><a className="page-numbers" href="/blog-grid">8</a></li>
                        <li><a className="next page-numbers" href="/blog-grid"><i className="icon-34"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
        </Layout>
    </div>
    )
}