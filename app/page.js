import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import Chooseus from "@/components/sections/home1/Chooseus"
import Cta from "@/components/sections/home1/Cta"
import Faq from "@/components/sections/home1/Faq"
import Feature from "@/components/sections/home1/Feature"
import Funfact from "@/components/sections/home1/Funfact"
import Process from "@/components/sections/home1/Process"
import Service from "@/components/sections/home1/Service"
import Team from "@/components/sections/home1/Team"
import Testimonial from "@/components/sections/home1/Testimonial"
export default function Home() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner/>
                <Funfact/>
                <Feature/>
                <Chooseus/>
                <Service/>
                <Process/>
                <Team/>
                <Cta/>
                <Testimonial/>
                <Faq/>
            </Layout>
        </div>
    )
}