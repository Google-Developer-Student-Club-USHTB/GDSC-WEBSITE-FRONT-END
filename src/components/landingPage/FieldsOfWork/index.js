/**
 *  This the main file of the ui of the Fields of work section section
 */
import "./style.css";
import { getDataFieldsOfWork } from "../../../api/landingPage";
import FieldItem from "./FieldItem";
const FieldsOfWork = () => {
  const data = getDataFieldsOfWork();
  console.log("Fields of work");
  console.log(data);
  console.log("/////////");
  return <div>FieldsOfWork</div>;
};

export default FieldsOfWork;
