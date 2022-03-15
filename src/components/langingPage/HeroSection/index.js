import "./style.css";
import { getImage } from "../../../api/landingPage/getImges";
const HeroSection = () => {
  const bgHome = getImage("hero");
  return <div>Hero Section</div>;
};

export default HeroSection;
