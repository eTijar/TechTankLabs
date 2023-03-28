import Buttons from "./Buttons/Buttons";

const BigHead = (props) => {
  return (
    <div className="BigHeader_container">
      <div>
        <p className="BigHeader">{props.title} </p>
        <div className="">
          <p className="BigHeader_text">{props.text}</p>
          {props.button && (
            <Buttons
              value={props.value}
              buttontype={props.type}
              link={props.link}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BigHead;
