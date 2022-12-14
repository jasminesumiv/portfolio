import { FaHtml5, FaGitAlt, FaProjectDiagram, FaVuejs } from "react-icons/fa";
import {
  SiJavascript,
  SiCss3,
  SiGraphql,
  SiReact,
  SiRedux,
  SiBootstrap,
  SiMaterialui,
} from "react-icons/si";
import { StyleWrapper } from "./SkillCard.styled";

const SkillCard = (props) => {
  const getIcon = (skillName) => {
    switch (skillName) {
      case "HTML":
        return <FaHtml5 className="icon" />;
      case "CSS":
        return <SiCss3 className="icon" />;
      case "JavaScript":
        return <SiJavascript className="icon" />;
      case "Vue JS":
        return <FaVuejs className="icon" />;
      case "React JS":
        return <SiReact className="icon" />;
      case "Redux":
        return <SiRedux className="icon" />;
      case "Bootstrap":
        return <SiBootstrap className="icon" />;
      case "Material UI":
        return <SiMaterialui className="icon" />;
      case "GIT":
        return <FaGitAlt className="icon" />;
      case "Agile":
        return <FaProjectDiagram className="icon" />;
      case "React Native":
        return <SiReact className="icon" />;
      case "GraphQL":
        return <SiGraphql className="icon" />;
      default:
        return <FaHtml5 className="icon" />;
    }
  };

  return (
    <StyleWrapper className="d-flex align-items-center flex-column">
      {getIcon(props.skillName)}
      <h5>{props.skillName}</h5>
    </StyleWrapper>
  );
};

export default SkillCard;
