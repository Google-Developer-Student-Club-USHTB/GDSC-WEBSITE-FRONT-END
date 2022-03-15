import "./style.css";
import { getDataAboutGdscUsthb } from "../../../api/landingPage";
import GdscUsthbItem from "./GdscUsthbItem";
const AboutGdscUsthb = () => {
  const data = getDataAboutGdscUsthb();
  return <div>About Gdsc Usthb</div>;
};

export default AboutGdscUsthb;
