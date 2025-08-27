import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="/index-2">Home Two</Link></li>
                        <li><Link href="/index-3">Home Three</Link></li>
                        <li><Link href="/index-4">Home Four</Link></li>
                        <li><Link href="/index-5">Home Five</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/services-2">Services Two</Link></li>
                        <li><Link href="/services-details">Service Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Project</Link>
                    <ul>
                        <li><Link href="/projects">Project</Link></li>
                        <li><Link href="/projects-details">Project Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/team">Our Team</Link></li>
                        <li><Link href="/team-details">Team Details</Link></li>
                        <li><Link href="/testimonials">Testimonial One</Link></li>
                        <li><Link href="/testimonials-2">Testimonial Two</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li> 
                        <li><Link href="/faq">Faq's</Link></li>
                        <li><Link href="/404">Error Page</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="/shop">Shop Page</Link></li>
                        <li><Link href="/shop-details">Shop Details</Link></li>
                        <li><Link href="/cart">Cart Page</Link></li>
                        <li><Link href="/checkout">Check Out</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">News</Link>
                    <ul>
                        <li><Link href="/blog-grid">Blog Grid</Link></li>
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                        <li><Link href="/blog-details-2">Blog Details Two</Link></li>
                    </ul>
                </li> 
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>
        </>
    )
}
