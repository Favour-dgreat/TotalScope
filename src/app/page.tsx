import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServicesOverview from "../../components/ServicesOverview/Services";
import ServicesDetail from "../../components/ServicesDetail/ServicesDetail";
import AboutUs from "../../components/About/About";
import Reviews from "../../components/Reviews/Reviews";
import Partners from "../../components/Partners/Partners";
import CTASection from "../../components/CTASection/CTASection";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-white">
      {/* NavBar*/}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* Services Overview */}
      <ServicesOverview />
      {/* Services Detail */}
      <ServicesDetail />
      {/* About Us */}
      <AboutUs />
      {/*Reviews*/}
      <Reviews />
      {/* Partners */}
      <Partners />
      {/* CTASection */}
      <CTASection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
