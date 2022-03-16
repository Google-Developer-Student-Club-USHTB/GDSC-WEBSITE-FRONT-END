/**
 * To use the right side image use getImage("imgRightSide")
 * To use the left side image use getImage("imgLeftSide")
 */
import "./style.css";
import { getDataAboutGdsc } from "../../../api/landingPage";
import { getImage } from "../../../api/landingPage/getImges";
const AboutGdsc = () => {
  const data = getDataAboutGdsc();
  return <div>About Gdsc</div>;
};

export default AboutGdsc;
