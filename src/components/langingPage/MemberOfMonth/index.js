/**
 *  This the main file of the ui of the Member of the month section
 */
import "./style.css";
import { getDataMembers } from "../../../api/landingPage";
import MemberItem from "./MemberItem";
const MemberOfMonth = () => {
  const data = getDataMembers();
  console.log("Member of month");
  console.log(data);
  console.log("/////////");
  return <div>MemberOfMonth</div>;
};

export default MemberOfMonth;
