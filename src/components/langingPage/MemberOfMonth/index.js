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
