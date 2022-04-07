/**
 * Here you can code a single item event or the card event
 * For the item image you can access the image by specifying the src to element.imageUrl
 * To use the calendar icon in src attribute img img element use getImage("iconSquareCalendar")
 */
import React from "react";
import "./style.css";
import { getImage } from "../../../helpers/getImges";
const EventItem = (props) => {
  const { element } = props;
  return (
    <div>
      EventItem
      <img src={getImage("iconSquareCalendar")} />
    </div>
  );
};
export default EventItem;
