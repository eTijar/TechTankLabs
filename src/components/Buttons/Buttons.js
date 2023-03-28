import "./Buttons.css";
import { Link } from "react-router-dom";
const Buttons = (props) => {
  return (
    <div className={`buttons`} >
      {props.link ? 
       <Link to={`/${props.link}`}>
       <button type={props.type} onClick={props.onClick} className={props.buttontype}>
         <p>{props.value}</p>
         {props.image && <img src={props.image} className="imgSize" alt="" />}
       </button>
     </Link>
       : 
      <a href={`${props.outlink}`}>
        <button type={props.type} onClick={props.onClick} className={props.buttontype}>
          <p>{props.value}</p>
          {props.image && <img src={props.image} className="imgSize" alt="" />}
        </button>
      </a>}
    </div>
  );
};

export default Buttons;
