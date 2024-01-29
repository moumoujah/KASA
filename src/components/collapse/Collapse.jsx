import './collapse.css';
import arrowCollapse from "../../assets/Arrow_collapse.png";
import { useState } from 'react';

export default function Collapse({ title, content })  {

    const [isOpen, setIsOpen] = useState(false);
  
    const clickOnArrow = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`collapseContainer ${isOpen ? "down" : ""}`}>
        <div className="collapse">
          <div className="collapseTitle">{title}</div>
          <div className={`collapseArrow ${isOpen ? "rotateArrow" : ""}`}>
            <img src={arrowCollapse} alt="Flèche"  
            onClick={clickOnArrow} />
          </div>
        </div>
          <div className={`content ${isOpen ? "down" : ""}`}>{content}</div>
      </div>
    );
};

