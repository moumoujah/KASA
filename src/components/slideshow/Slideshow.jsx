import arrowRight from "../../assets/arrow-right.png";
import arrowLeft from "../../assets/arrow-left.png";
import './slideshow.css'
import { useState } from "react";

 function Slideshow({pictures}) {

    
    const [picture, setpicture] = useState(0);
    const pictureCount = pictures.length;

    const slideRight = () => {
        setpicture(picture + 1);
        if (picture === pictureCount - 1) {
        setpicture(0);
        }
    };
   
    const slideLeft = () => {
        setpicture(picture - 1);
        if (picture === 0) {
        setpicture(pictureCount - 1);
        }
    };
    
    const pictureCounter = `${picture + 1} / ${pictureCount}`
    // const slideNone = () => {
    //     if (pictures.length === 1 ) {
    //         pictureNone[picture].classList.add('arrowNone');
    //         pictureNone[picture].classList.remove('.arrowRight .arrowLeft '); 

    //     }
    // }
    // let pictureNone = document.querySelectorAll('.arrowRight .arrowRight');	

    return (
        <div className="slideshow">
            <img
                className="img_Slideshow"
                src={pictures[picture]}
                alt="pictures"
            />
             <img
                className={pictureCount === 1 ? "arrowNone" : "arrowRight"}
                src={arrowRight}
                alt="slide right"
                onClick={slideRight}
            />
            <img
                className={pictureCount === 1 ? "arrowNone" : "arrowLeft"}
                src={arrowLeft}
                alt="slide left"
                onClick={slideLeft}
            />
            <div className="counterPicture">{pictureCounter}</div>

            
        </div>
    );
};

export default Slideshow