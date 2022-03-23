/**
 * This the main file of the ui of the about gdsc section
 * To use the right side image use getImage("imgRightSide")
 * To use the left side image use getImage("imgLeftSide")
 */
import "./style.css";
import { getDataAboutGdsc } from "../../../api/landingPage";
import { getImage } from "../../../helpers/getImges";
const AboutGdsc = () => {
  const data = getDataAboutGdsc();
  console.log("About gdsc");
  console.log(data);
  console.log("/////////");
  return <div>About Gdsc</div>;
};

export default AboutGdsc;
