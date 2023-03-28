import Buttons from "../Buttons/Buttons";
import './Flex.css'

export const Flex = (props) => {
  return (
    <div className={`flex  ${props.flex}`}>
      {props.data.map((data) => (
        <div className=''>
          <img src={data.image} className="flex-image" alt="" />
            <p className="flex_title">{data.title}</p>
            <p className="flex_subtitle">{data.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export const FlexGrid = (props) => {
  return (
    <div className={`${props.bgColor} ${props.position}`}>
      {props.topic && <>
      <p className="topic">{props.topic}</p>
      <p className="subtopic">{props.subtopic}</p>
      </>}
    <div className={`${props.flex}`}>
      {props.data.map((data) => (
        <div className=''>
          <img src={data.image} className={`flex-image ${props.imgSize}`} alt="" />
            <p className="flex_title">{data.title}</p>
            <p className="flex_subtitle">{data.subtitle}</p>
        </div>
      ))}
    </div>
    </div>
  );
};


// export default Grids;export
