import "./style.css";
import { getDataMembers } from "../../../api/landingPage";
import MemberItem from "./MemberItem";
const MemberOfMonth = () => {
  const data = getDataMembers();
  return <div>MemberOfMonth</div>;
};

export default MemberOfMonth;
