import Boxes from "../assets/boxes.png";
import XenoLogoWithText from "../assets/xeno logo with text.png";
import Button from "../components/button";
import "./intro.css";

const IntroPage = ({ onRouteChange }) => {
  return (
    <div className="intro-page">
      <div style={{ backgroundImage: `url(${Boxes})` }} className="boxes"></div>
      <img
        src={XenoLogoWithText}
        alt="xeno logo with text"
        className="xeno-logo-with-text"
      />
      <Button onClick={() => onRouteChange("chat")} className="button">
        Hey Xeno👋️
      </Button>
    </div>
  );
};

export default IntroPage;
