import NavigationBar from "../components/general/Navbar";
import AboutGdsc from "../components/landingPage/AboutGdsc";
import AboutGdscUsthb from "../components/landingPage/AboutGdscUsthb";
import HeroSection from "../components/landingPage/HeroSection";
import DeviderBanner from "../components/landingPage/DeviderBanner/";
import FieldsOfWork from "../components/landingPage/FieldsOfWork";
import OurEvents from "../components/landingPage/OurEvents";
import MemberOfMonth from "../components/landingPage/MemberOfMonth";
import OurProjects from "../components/landingPage/OurProjects";
import TrustedBy from "../components/landingPage/TrustedBy";
import QandA from "../components/landingPage/QandA";
import ContactUs from "../components/landingPage/ContactUs";
import OurSocials from "../components/landingPage/OurSocials";
import NewsLetter from "../components/landingPage/NewsLetter";
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
