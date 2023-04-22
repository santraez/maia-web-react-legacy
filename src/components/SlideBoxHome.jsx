import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

const SlideBoxHome = ({ image, title, text, width='100px', height='100px', radius='50px' }) => {
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
        cursor: 'pointer',
        borderRadius: radius,
        marginBottom: (screen.width > 830) ? '0px' : '40px',
      }}
      onClick={() => setShowText(!showText)}
      onMouseEnter={() => setShowText(!showText)}
      onMouseLeave={() => setShowText(!showText)}
      >
      <div
        style={{
          cursor: 'pointer',
          width: '100%',
          height: (showText) ? ((screen.width > 1270) ? '445px' : '270px') : ((screen.width > 1270) ? '270px' : '175px'),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#649374',
          borderTop: '1.5px solid #FFFFFF',
        }}
        className="slide-box__text"
        onClick={() => setShowText(!showText)}
      >
        <div
          style={{
            marginBottom: (showText) ? '25px' : '0px',
            display: (showText) ? 'none': 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
          }}
          className="slide-box__text--title"
        >
          <h3
            style={{
              fontSize: (screen.width > 1270) ? '40px' : '28px',
              width: '70%',
            }}
          >{title}</h3>
        </div>
        {
          (showText) && (
            <ul style={{
              fontSize: (showText) ? ((screen.width > 1270) ? '38px' : '25px') : '0px',
              color: '#FFFFFF',
              margin: (showText) ? '10px 20px' : '0px 50px',
            }}>
              {
                text.map((item, index) => (
                  <li style={{ margin:'0 0 20px 0' }} key={index}>{item}</li>
                ))
              }
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default SlideBoxHome;