import React, { useRef } from "react";
import CardComment from "./CardComment";
import leftImg from "../assets/left.svg";
import rightImg from "../assets/right.svg";
import useScreenSize from "../hooks/useScreenSize";

const Comments = () => {
  const myRef = useRef(null);
  const { width } = useScreenSize();
  const handleLeft = () => {
    let intervalId = null;
    const startScrolling = () => {
      intervalId = setInterval(() => {
        myRef.current.scrollLeft -= 10;
      }, 50);
    };
    const stopScrolling = () => {
      clearInterval(intervalId);
    };
    return { startScrolling, stopScrolling };
  };
  
  const handleRight = () => {
    let intervalId = null;
    const startScrolling = () => {
      intervalId = setInterval(() => {
        myRef.current.scrollLeft += 10;
      }, 50);
    };
    const stopScrolling = () => {
      clearInterval(intervalId);
    };
    return { startScrolling, stopScrolling };
  };
  
  const { startScrolling: startScrollingLeft, stopScrolling: stopScrollingLeft } = handleLeft();
  const { startScrolling: startScrollingRight, stopScrolling: stopScrollingRight } = handleRight();
  
  return (
    <>
    <div ref={myRef} className="comments__container--back">
      <CardComment
        text='Realizamos preguntas para conocer el punto de partida y crear una '
        name='pablo ruiz,'
        subtext='head of hr - globant'
        width={(width > 720) ? '314px' : '266px'}
        height={(width > 720) ? '395px' : '250px'}
        radius='20px'
        margin='0 50px 0 30px'
      />
      <CardComment
        text='Realizamos preguntas para conocer el punto de partida y crear una '
        name='pablo ruiz,'
        subtext='head of hr - globant'
        width={(width > 720) ? '314px' : '266px'}
        height={(width > 720) ? '395px' : '250px'}
        radius='20px'
        margin='0 50px 0 0'
      />
      <CardComment
        text='Realizamos preguntas para conocer el punto de partida y crear una '
        name='pablo ruiz,'
        subtext='head of hr - globant'
        width={(width > 720) ? '314px' : '266px'}
        height={(width > 720) ? '395px' : '250px'}
        radius='20px'
        margin='0 50px 0 0'
      />
      <CardComment
        text='Realizamos preguntas para conocer el punto de partida y crear una '
        name='pablo ruiz,'
        subtext='head of hr - globant'
        width={(width > 720) ? '314px' : '266px'}
        height={(width > 720) ? '395px' : '250px'}
        radius='20px'
        margin='0 50px 0 0'
      />
      <CardComment
        text='Realizamos preguntas para conocer el punto de partida y crear una '
        name='pablo ruiz,'
        subtext='head of hr - globant'
        width={(width > 720) ? '314px' : '266px'}
        height={(width > 720) ? '395px' : '250px'}
        radius='20px'
        margin='0 50px 0 0'
      />
      <CardComment
        text='Realizamos preguntas para conocer el punto de partida y crear una '
        name='pablo ruiz,'
        subtext='head of hr - globant'
        width={(width > 720) ? '314px' : '266px'}
        height={(width > 720) ? '395px' : '250px'}
        radius='20px'
        margin='0 50px 0 0'
      />
      <CardComment
        text='Realizamos preguntas para conocer el punto de partida y crear una '
        name='pablo ruiz,'
        subtext='head of hr - globant'
        width={(width > 720) ? '314px' : '266px'}
        height={(width > 720) ? '395px' : '250px'}
        radius='20px'
        margin='0 50px 0 0'
      />
    </div>
    <div className="comments__container--back-buttons">
      <button
        onMouseDown={startScrollingLeft}
        onMouseUp={stopScrollingLeft}
      >
        <img src={leftImg} alt="left" />
      </button>
      <button
        onMouseDown={startScrollingRight}
        onMouseUp={stopScrollingRight}
      >
        <img src={rightImg} alt="right" />
      </button>
    </div>
    </>
  );
};

export default Comments;