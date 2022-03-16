/**
 * For the Team item image you can access the image by specifying the src to getImage(element.imageUrl)
 * To use the icons
 * Twitter getImage("iconMemberTwitter")
 * linkedin getImage("iconMemberInsta")
 * instagram getImage("iconMemberLinked")
 */
import "./style.css";
import React from "react";
import { getImage } from "../../../api/landingPage/getImges";
const MemberItem = (props) => {
  const { element } = props;
  return <div>MemberItem</div>;
};

export default MemberItem;
