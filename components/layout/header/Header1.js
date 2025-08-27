import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"



export default function Header1({ scroll, handleMobileMenu, handlePopup }) {
    
    return (
        <>

        {/* main header */}
        <header className={`header ${scroll ? "fixed-header" : ""}`}>

            <div className="main_header">
                <div className="container"> 
                    <div className="main_header_inner">
                        <div className="main_header_logo">
                            <figure>
                                <Link href="/"><img src="assets/images/logo.png" alt="Companny Logo"/></Link>
                            </figure>
                        </div>
                        <div className="main_header_menu menu_area">
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <div className="menu-bar">
                                    <i className="fas fa-bars"></i>
                                </div>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="header_right_content">
                            <button className="search-toggler" onClick={handlePopup}><i className="icon-50"></i></button>
                            <div className="link-btn"><Link href="#" className="btn_style_one">Get Started</Link></div>
                        </div> 
                    </div>
                </div>
            </div>
            

            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="container">
                    <div className="main_header_inner">
                        <div className="main_header_logo">
                            <figure>
                                <Link href="/"><img src="assets/images/logo.png" alt="Companny Logo"/></Link>
                            </figure>
                        </div>
                        <div className="main_header_menu menu_area">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="header_right_content">
                            <button className="search-toggler" onClick={handlePopup}><i className="icon-50"></i></button>
                            <div className="link-btn"><Link href="#" className="btn_style_one">Get Started</Link></div>
                        </div> 
                    </div>            
                </div> 
            </div>

            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>
        </>
    )
}
