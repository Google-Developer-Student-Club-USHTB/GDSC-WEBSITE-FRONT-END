import "./style.css";
import { getDataFieldsOfWork } from "../../../api/landingPage";
import FieldItem from "./FieldItem";
const FieldsOfWork = () => {
  const data = getDataFieldsOfWork();
  return <div>Fields Of Work</div>;
};

export default FieldsOfWork;
