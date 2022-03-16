/**
 * For the item image you can access the image by specifying the src to getImage(element.imageUrl)
 */
import React from "react";
import "./style.css";
import { getImage } from "../../../api/landingPage/getImges";
const FieldItem = (props) => {
  const { element } = props;
  return <div>FieldItem</div>;
};
export default FieldItem;
