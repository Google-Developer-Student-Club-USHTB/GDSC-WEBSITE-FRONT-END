import NavigationBar from "../components/general/Navbar";
import AboutGdsc from "../components/langingPage/AboutGdsc";
import AboutGdscUsthb from "../components/langingPage/AboutGdscUsthb";
import HeroSection from "../components/langingPage/HeroSection";
import DeviderBanner from "../components/langingPage/DeviderBanner/";
import FieldsOfWork from "../components/langingPage/FieldsOfWork";
import OurEvents from "../components/langingPage/OurEvents";
import MemberOfMonth from "../components/langingPage/MemberOfMonth";
import OurProjects from "../components/langingPage/OurProjects";
import TrustedBy from "../components/langingPage/TrustedBy";
import QandA from "../components/langingPage/QandA";
import ContactUs from "../components/langingPage/ContactUs";
import OurSocials from "../components/langingPage/OurSocials";
import NewsLetter from "../components/langingPage/NewsLetter";
import Footer from "../components/general/Footer";
export const MainPage = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <DeviderBanner devider="" title="About us" />
      <AboutGdsc />
      <AboutGdscUsthb />
      <DeviderBanner devider="imgDeviderField" title="Our Fields of work" />
      <FieldsOfWork />
      <DeviderBanner devider="imgDeviderEvent" title="Our Events" />
      <OurEvents />
      <DeviderBanner devider="imgDeviderTeam" title="Our Team" />
      <MemberOfMonth />
      <DeviderBanner devider="imgDeviderProject" title="Our Projects" />
      <OurProjects />
      <TrustedBy />
      <QandA />
      <DeviderBanner devider="imgDeviderContact" title="Contact us" />
      <ContactUs />
      <OurSocials />
      <NewsLetter />
      <Footer />
    </>
  );
};
