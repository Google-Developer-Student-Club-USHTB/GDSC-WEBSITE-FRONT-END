import "./style.css";
import { getDataProjects } from "../../../api/landingPage";
import ProjectItem from "./ProjectItem";
const OurProjects = () => {
  const data = getDataProjects();
  return <div>Our Projects</div>;
};

export default OurProjects;
