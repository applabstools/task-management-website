'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}>X</div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/images/mobile-logo.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home One</Link></li>
                                        <li><Link href="/index-2">Home Two</Link></li>
                                        <li><Link href="/index-3">Home Three</Link></li>
                                        <li><Link href="/index-4">Home Four</Link></li>
                                        <li><Link href="/index-5">Home Five</Link></li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/services-2">Services Two</Link></li>
                                    <li><Link href="/services-details">Service Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Project</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/projects">Project</Link></li>
                                        <li><Link href="/projects-details">Project Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Pages</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/team">Our Team</Link></li>
                                        <li><Link href="/team-details">Team Details</Link></li>
                                        <li><Link href="/testimonials">Testimonial One</Link></li>
                                        <li><Link href="/testimonials-2">Testimonial Two</Link></li>
                                        <li><Link href="/pricing">Pricing</Link></li> 
                                        <li><Link href="/faq">Faq's</Link></li>
                                        <li><Link href="/404">Error Page</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#">Shop</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <li><Link href="/shop">Shop Page</Link></li>
                                        <li><Link href="/shop-details">Shop Details</Link></li>
                                        <li><Link href="/cart">Cart Page</Link></li>
                                        <li><Link href="/checkout">Check Out</Link></li>
                                    </ul>
                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}><Link href="/#">News</Link>
                                    <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                        <li><Link href="/blog-grid">Blog Grid</Link></li>
                                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                                        <li><Link href="/blog-details">Blog Details</Link></li>
                                        <li><Link href="/blog-details-2">Blog Details Two</Link></li>
                                    </ul>
                                    <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>

                    </div>
                    {/*Social Links*/}
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Chicago 12, Melborne City, USA</li>
                            <li><Link href="tel:+8801682648101">+88 01682648101</Link></li>
                            <li><Link href="mailto:info@example.com">info@example.com</Link></li>
                        </ul>
                    </div>
                    <ul className="social-links centred">
                        <li><Link href="/"><span className="fab fa-twitter"></span></Link></li>
                        <li><Link href="/"><span className="fab fa-facebook-square"></span></Link></li>
                        <li><Link href="/"><span className="fab fa-pinterest-p"></span></Link></li>
                        <li><Link href="/"><span className="fab fa-instagram"></span></Link></li>
                        <li><Link href="/"><span className="fab fa-youtube"></span></Link></li>
                    </ul>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

          

        </>
    )
}
