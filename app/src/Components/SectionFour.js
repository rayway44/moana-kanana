import Icon1 from "./icons/planning 1.png";
import Icon2 from "./icons/planning 2.png";
import Icon3 from "./icons/planning 3.png";
import Icon4 from "./icons/planning 4.png";
import Icon5 from "./icons/planning 5.png";
import Icon6 from "./icons/planning 6.png";
import Icon7 from "./icons/planning 7.png";
import "./css/SectionFour.css";

export default function SectionFour() {
  return (
    <div className="section-four">
      <h1>LIFE SKILLS WORTH LEARNING</h1>
      <div className="section-four-icons-container">
        <div className="section-four-icon-column">
          <img src={Icon1} alt="icon" className="section-four-icon" />
          <span>icon skill</span>
        </div>
        <div className="section-four-icon-column">
          <img src={Icon2} alt="icon" className="section-four-icon" />
          <span>icon skill</span>
        </div>
        <div className="section-four-icon-column">
          <img src={Icon3} alt="icon" className="section-four-icon" />
          <span>icon skill</span>
        </div>
        <div className="section-four-icon-column">
          <img src={Icon4} alt="icon" className="section-four-icon" />
          <span>icon skill</span>
        </div>
        <div className="section-four-icon-column">
          <img src={Icon5} alt="icon" className="section-four-icon" />
          <span>icon skill</span>
        </div>
        <div className="section-four-icon-column">
          <img src={Icon6} alt="icon" className="section-four-icon" />
          <span>icon skill</span>
        </div>
        <div className="section-four-icon-column">
          <img src={Icon7} alt="icon" className="section-four-icon" />
          <span>icon skill</span>
        </div>
      </div>
    </div>
  );
}
