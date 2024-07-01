import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import AboutAgency2 from "@/components/sections/AboutAgency2"
import Awward from "@/components/sections/Awward"
import Blog1 from "@/components/sections/Blog1"
import Headline1 from "@/components/sections/Headline1"
import Headline2 from "@/components/sections/Headline2"
import Headline3 from "@/components/sections/Headline3"
import Headline4 from "@/components/sections/Headline4"
import Headline5 from "@/components/sections/Headline5"
import Headline7 from "@/components/sections/Headline7"
import Hero1 from "@/components/sections/Hero1"
import LetsTalk1 from "@/components/sections/LetsTalk1"
import LetsTalk2 from "@/components/sections/LetsTalk2"
import Portfolio1 from "@/components/sections/Portfolio1"
import Services1 from "@/components/sections/Services1"
import Team1 from "@/components/sections/Team1"
import Testimonials1 from "@/components/sections/Testimonials1"
import Video1 from "@/components/sections/Video1"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} bodyCls="home-one">
                <Hero1 />
                <Headline1 />
                <About1 />
                <Video1 />
                <Services1 />
                <Headline7 />
                <AboutAgency2 />
                <Headline3 />
                <Portfolio1 />
                {/* <Awward /> */}
                <Headline4 />
                {/* <Team1 /> */}
                <Testimonials1 />
                <Headline5 />
                {/* <Blog1 /> */}
                <LetsTalk2 />
            </Layout>
        </>
    )
}