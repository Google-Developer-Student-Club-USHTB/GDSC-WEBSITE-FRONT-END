/**
 *  This the main file of the ui of the about gdsc usthb section
 */
import "./style.css";
import { getDataAboutGdscUsthb } from "../../../api/landingPage";
import GdscUsthbItem from "./GdscUsthbItem";
const AboutGdscUsthb = () => {
  const data = getDataAboutGdscUsthb();
  console.log("About gdsc usthb");
  console.log(data);
  console.log("/////////");
  return <div>About Gdsc Usthb</div>;
};

export default AboutGdscUsthb;
