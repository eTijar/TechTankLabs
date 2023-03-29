import "./Banner.css"
import {ContactForm} from "../Form/Form";
import { Link } from "react-router-dom";
export const Banner = (props) => {
    return (
        // Define top content/Banner
      <div className={`heading ${ props.headerClass }`} id="banner">
        {/* Home heading & Page Title */}
        <p className={ props.headerTextClass }>
            {props.headingText}
        </p>

        <div className= "banner-bottom">
          <p>
            {props.subtitle}
          </p>

          {(() => {
        if (props.add) {
          return (<ContactForm/>)
        } else {
          return (
            <a href={`${props.link}`}>
              <button className="quote">JOIN US TO BUILD THE NEXT BIG STARTUP</button>
              </a> )
        }
      })()}
        </div>
      </div>
    );
}
 
export const Banner2 = (props) => {
  return (
      // Define top content/Banner
    <div className={`heading ${ props.headerClass }`} id="banner">

<div className="sideImage">
      <p className={ props.headerTextClass }>
          {props.headingText}
      </p>
        <p className= "banner-bottom">
          {props.subtitle}
        </p>
      </div>
      {(() => {
        if (props.add) {
          return (<ContactForm/>)
        } else {
          return (
             <img src={props.img} className={props.imgClass} />)
        }
      })()}
     
    </div>
  );
}
