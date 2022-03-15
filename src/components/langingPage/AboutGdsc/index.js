import "./style.css";
import { getDataAboutGdsc } from "../../../api/landingPage";
const AboutGdsc = () => {
  const data = getDataAboutGdsc();
  return <div>About Gdsc</div>;
};

export default AboutGdsc;
