import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServicesOverview from "../../components/ServicesOverview/Services";
import ServicesDetail from "../../components/ServicesDetail/ServicesDetail";
import AboutUs from "../../components/About/About";
import Reviews from "../../components/Reviews/Reviews";
import Partners from "../../components/Partners/Partners";
import CTASection from "../../components/CTASection/CTASection";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import Homepage from "../../Pages/Homepage/home";
export default function Home() {
  return (
    <div className="bg-[#030004] h-[100vh] w-[100vw] overflow-x-hidden overflow-y-auto">
   <Homepage />
  
    </div>
  );
}
