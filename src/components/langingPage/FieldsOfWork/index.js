import "./style.css";
import { getDataFieldsOfWork } from "../../../api/landingPage";
import FieldItem from "./FieldItem";
const FieldsOfWork = () => {
  const data = getDataFieldsOfWork();
  console.log("Fields of work");
  console.log(data);
  console.log("/////////");
  return <div>Fields Of Work</div>;
};

export default FieldsOfWork;
