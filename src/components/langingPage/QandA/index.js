import "./style.css";
import { getDataQuestions } from "../../../api/landingPage";
import QuestionItem from "./QuestionItem";
const QandA = () => {
  const data = getDataQuestions();
  console.log("QandA");
  console.log(data);
  console.log("/////////");
  return <div>Q and A</div>;
};

export default QandA;
