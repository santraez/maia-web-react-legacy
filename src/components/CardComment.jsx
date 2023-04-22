import comillasImg from "../assets/comillas.svg";

const CardComment = ({ text, name, subtext, width, height, radius, margin, }) => {
  return (
    <div
      style={{
        minWidth: width,
        height: height,
        borderRadius: radius,
        margin: margin,
      }}
      className="comments__container"
    >
      <div className="comments__text--back">
        <img src={comillasImg} alt="comillas" />
        <p className="comments__text">{text}</p>
      </div>
      <div className="comments__subtext--back">
        <h4>{name}</h4>
        <p className="comments__subtext">{subtext}</p>
      </div>
    </div>
  );
};

export default CardComment;