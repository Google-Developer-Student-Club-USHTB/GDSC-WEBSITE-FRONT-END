/**
 * For the item image you can access the image by specifying the src to getImage(element.imageUrl)
 * To use the calendar icon in src attribute img img element use getImage("iconSquareCalendar")
 */
import React from "react";
import "./style.css";
import { getImage } from "../../../api/landingPage/getImges";
const EventItem = (props) => {
  const { element } = props;
  return <div>EventItem</div>;
};
export default EventItem;
