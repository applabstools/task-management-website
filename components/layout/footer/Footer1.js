import Link from "next/link"

export default function Footer1() {
    return (
        <>
        <footer className="main_footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="footer_widget brand_widget" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                                <div className="footer_brand">
                                    <div className="brand_icon">
                                        <div className="icon_grid">
                                            <div className="grid_square"></div>
                                            <div className="grid_square"></div>
                                            <div className="grid_square"></div>
                                            <div className="grid_square"></div>
                                        </div>
                                    </div>
                                    <h3 className="brand_name">Task Me</h3>
                                </div>
                                <p className="brand_description">
                                    Project management software and asset tracking platform for modern teams. 
                                    SEO: agile software, Kanban boards, Scrum tool, task tracking, collaboration software.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="footer_widget product_widget" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                <h4 className="footer_widget_title">Product</h4>
                                <ul className="footer_links">
                                    <li><Link href="/">Features</Link></li>
                                    <li><Link href="/">Pricing</Link></li>
                                    <li><Link href="/">Integrations</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="footer_widget company_widget" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                <h4 className="footer_widget_title">Company</h4>
                                <ul className="footer_links">
                                    <li><Link href="/">About</Link></li>
                                    <li><Link href="/">Careers</Link></li>
                                    <li><Link href="/">News</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="footer_widget resources_widget" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                                <h4 className="footer_widget_title">Resources</h4>
                                <ul className="footer_links">
                                    <li><Link href="/">Blog</Link></li>
                                    <li><Link href="/">Help Center</Link></li>
                                    <li><Link href="/">Security</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="copyright">
                        Copyright &copy; {new Date().getFullYear()} &nbsp;
                        <Link href="/">Task Me</Link>
                        , Inc. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
