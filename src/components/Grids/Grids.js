import Buttons from "../Buttons/Buttons";
import './Grids.css'

export const Grids = (props) => {
  return (
    <div className="grids">
      {props.data.map((data) => (
        <div className={props.grid}>
          <div className="text">
            <p className="grid_title">{data.title}</p>
            <p className="grid_subtitle">{data.subtitle}</p>
          </div>
          {data.bigText ? 
          <p className="text">Get Started Today</p> :
          <img src={data.image} className="grid-image" alt="" />
        }
        </div>
      ))}
    </div>
  );
};

export const GridText = (props) => {
  return (
    <div className={`grids ${props.bgColor}`}>
        <div className={props.grid}>
          <p className={` ${props.footer && "footerColor"} grid_title`}>{props.data.title}</p> 
          <div className="text">
            <p className={` ${props.footer && "footerColor"} grid_subtitle`}>{props.data.subtitle}</p>
            {props.footer &&
            <Buttons
              buttontype="brown_btn btn footer-btn"
              value="Contact Us"
              link="contact-us"
            />}
          </div>
        </div>
    </div>
  );
};

export const GridImage = (props) => {
  return (
    <div className={`grids ${props.bgColor}`}>
        <div className={props.grid}>
          <div className="text">
            <p className="grid_smallText">{props.data.smallText}</p>
            <p className="grid_title">{props.data.title}</p>
            <p className="grid_subtitle">{props.data.subtitle}</p>
          </div>
          <img src={props.data.image} className="grid-image" alt="" />
        </div>
    </div>
  );
};

// export default Grids;export
