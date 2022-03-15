import "./style.css";
import { getDataEvents } from "../../../api/landingPage";
import EventItem from "./EventItem";
const OurEvents = () => {
  const data = getDataEvents();
  return <div>Our Events</div>;
};

export default OurEvents;
