import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    {/* <Hero></Hero> */}
    <Services />
    <WhyChooseUs />
    <HowItWorks />
    <Testimonials />
    <ServiceAreas />
    <Gallery />
    <FAQ />
    <Contact />
    <Footer />
    
    </>
      );
}
