const FlashCard = ({ image, number, title, text }) => {
  return (
    <div className="flash-card__container">
      <div className="flash-card__content">
        <h4>{number}</h4>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
      <div
        className="flash-card__image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  );
};

export default FlashCard;
