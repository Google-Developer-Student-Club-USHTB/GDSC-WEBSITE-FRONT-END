import "./style.css";
import { getDataEvents } from "../../../api/landingPage";
import EventItem from "./EventItem";
const OurEvents = () => {
  const data = getDataEvents();
  console.log("Our Events");
  console.log(data);
  console.log("/////////");
  return <div>Our Events</div>;
};

export default OurEvents;
