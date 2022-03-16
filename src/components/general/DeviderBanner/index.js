/**
 * This Component represents the devider banner that represents the begining of many sections
 *
 * This component accepts two props the first one is the devider wich specify wich devider we are calling
 * devider value will be the value that we use to call the background image of the devider
 *
 * To get the image of the background we use the function getImage(devider) devider is passed as prop
 *
 * Depending on what devider you calling devider can take one of these values:
 * Devider about us take no no background image so devider prop will be equal to "" when calling the component
 * Devider our fields of work deivder value = "imgDeviderField"
 * Devider our events devider value ="imgDeviderEvent"
 * Devider our team devider value="imgDeviderTeam"
 * Devider our projects devider value="imgDeviderProject"
 * Devider Contact us devider value ="imgDeviderContact"
 *
 * The second prop is title wich is the text shown in the devider for example our events or our projects..
 */
import "./style.css";
import { getImage } from "../../../api/landingPage/getImges";
const DeviderBanner = (props) => {
  const { devider, title } = props;
  return <div>Devider Banner</div>;
};

export default DeviderBanner;
