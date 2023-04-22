import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

const PhotoCircle = ({ photo, name, text, width, height }) => {
  const [showText, setShowText] = useState(false);
  const screen = useScreenSize();
  return (
    <div
      className="photo-circle__container--back"
      style={{
        width: width,
        height: height,
        borderRadius: '50%',
        overflow: 'hidden',
      }}
      onClick={(screen.width < 830) ? (() => setShowText(!showText)) : (() => {})}
      onMouseEnter={(screen.width > 830) ? (() => setShowText(!showText)) : (() => {})}
      onMouseLeave={(screen.width > 830) ? (() => setShowText(!showText)) : (() => {})}
    >
      <div
        className={(showText) ? "display-none" : "photo-circle__container"}
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
      </div>
      <div
        className={(showText) ? "photo-circle__text" : "display-none"}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#649374',
        }}
      >
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PhotoCircle;