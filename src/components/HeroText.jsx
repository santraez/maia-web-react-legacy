const HeroText = ({ width='50%', title, text, button }) => {
  return (
    <div style={{
      width: width,
    }} className="hero__content">
      {(title) && <p>{title}</p>}
      {(text) && <h1>{text}</h1>}
      {button}
    </div>
  );
};

export default HeroText;