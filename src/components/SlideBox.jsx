import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

const SlideBox = ({ image, title, text, width='100px', height='100px', radius='50px' }) => {
  const [showText, setShowText] = useState(false);
  const screen = useScreenSize();
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        overflow: 'hidden',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: width,
        height: height,
        // cursor: 'pointer',
        borderRadius: radius,
        marginBottom: (screen.width > 830) ? '0px' : '20px',
      }}
      onClick={(screen.width < 830) ? (() => setShowText(!showText)) : (() => {})}
      onMouseEnter={(screen.width > 830) ? (() => setShowText(!showText)) : (() => {})}
      onMouseLeave={(screen.width > 830) ? (() => setShowText(!showText)) : (() => {})}
    >
      <div
        style={{
          // cursor: 'pointer',
          width: '100%',
          height: (showText) ? ((screen.width > 1270) ? '245px' : '250px') : ((screen.width > 1270) ? '140px' : '85px'),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#649374',
          borderTop: '1.5px solid #FFFFFF',
        }}
        className="slide-box__text"
        onClick={(screen.width < 830) ? (() => setShowText(!showText)) : (() => {})}
      >
        <div
          style={{
            marginBottom: (showText) ? '25px' : '0px',
          }}
          className="slide-box__text--title"
        >
          <h3
            style={{
              fontSize: (screen.width > 1270) ? '40px' : '28px',
            }}
          >{title}</h3>
        </div>
        {
          (showText) && (
            <p
              style={{
                fontSize: (screen.width > 1270) ? '22px' : '20px',
              }}
            >{text}</p>
          )
        }
      </div>
    </div>
  );
};

export default SlideBox;