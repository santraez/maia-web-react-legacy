import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

const PhotoText = ({ photo, name, lastname, subtitle, text, width, height }) => {
  const [showText, setShowText] = useState(false);
  const screen = useScreenSize();
  return (
    <div
      className="photo-text__container--back"
      style={{
        width: width,
        height: height,
      }}
      onClick={(screen.width < 830) ? (() => setShowText(!showText)) : (() => {})}
      onMouseEnter={(screen.width > 830) ? (() => setShowText(!showText)) : (() => {})}
      onMouseLeave={(screen.width > 830) ? (() => setShowText(!showText)) : (() => {})}
    >
      <div
        className={(showText) ? "display-none" : "photo-text__container"}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${photo})`,
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <h3>{name}</h3>
        <h3>{lastname}</h3>
      </div>
      <div
        className={(showText) ? "photo-text__text" : "display-none"}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#649374',
        }}
      >
        <h3>{name} {lastname}</h3>
        <h4>{subtitle}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PhotoText;