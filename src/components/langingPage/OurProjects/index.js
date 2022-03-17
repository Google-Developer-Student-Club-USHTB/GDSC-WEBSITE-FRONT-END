import "./style.css";
import { getDataProjects } from "../../../api/landingPage";
import ProjectItem from "./ProjectItem";
const OurProjects = () => {
  const data = getDataProjects();
  console.log("Our Projects");
  console.log(data);
  console.log("/////////");
  return <div>Our Projects</div>;
};

export default OurProjects;
