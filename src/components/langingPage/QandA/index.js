import "./style.css";
import { getDataQuestions } from "../../../api/landingPage";
import QuestionItem from "./QuestionItem";
const QandA = () => {
  const data = getDataQuestions();
  return <div>Q and A</div>;
};

export default QandA;
