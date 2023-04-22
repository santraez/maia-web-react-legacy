import ToggleButton from "../components/ToggleButton";
import mountainImg from "../assets/mountain.png";
import CenterText from "../components/CenterText";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import IconsPersonas from "../components/IconsPersonas";
import SlidePrices from "../components/SlidePrices";
import { useAppContext } from "../context/AppContext";
import group3Img from "../assets/group3.png";
import rightArrowImg from "../assets/right-arrow.svg";
import useScreenSize from "../hooks/useScreenSize";
import { useEffect, useState, useRef } from "react";

const Personas = () => {
const navigate = useNavigate();
const { appContext, setAppContext } = useAppContext();
const { width, } = useScreenSize();
const [image, setImage] = useState(mountainImg);

useEffect(() => {
window.scrollTo(0, 0);
}, []);

const handleScroll = () => {
  const scrollTop = window.pageYOffset;
  if (scrollTop <= 120) {
    setImage(mountainImg);
  } else {
    setImage(group3Img);
  }
};
useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

return (
  <>
    <div className="hero-personas__container">
  <div className="hero-personas__image" style={{
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}></div>
  <div className="hero-personas__content">
    <h4>Manifiesto</h4>
    <h3>
      Pensamos la vida como una montaña, donde cada uno tiene la suya y parte desde donde está. Planteando la cima como dirección, no un punto de llegada.
    </h3>
    {
      (width > 675) && (
        <h3>
          MAIA es tu guía en la montaña, la conoce mejor que nadie y te da las herramientas que vas necesitando a lo largo del camino. Desde donde estás hacia donde querés ir.
        </h3>
      )
    }
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
            <Button
              action={() => navigate('/contactanos')}
              text='agenda tu primera sesión free'
              fontSize='14px'
              uppercase={true}
              width={(width > 790) ? '400px' : '214px'}
              fontsize={(width > 790) ? '18px' : '14px'}
              height='50px'
              background='#649374'
              color='#FFFFFF'
              margin={(width > 675) ? (width < 1250) ? '25px 0 0 0' : '37px 0 0 0' : '30px 0 0 0'}
            />
          </div>
        </div>
      </div>
      <div style={{ margin: (width > 675) ? '90px 0 90px 0' : '40px 0 55px 0' }}>
        <CenterText title='Tu guía' />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconsPersonas />
      </div>
      <div style={{ margin: (width > 900) ? '100px 0 40px 0' : '20px 0 25px 0' }}>
        <CenterText title='Elegí tu plan' />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: (width > 900) ? 'row' : 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 0 55px 0'
        }}
      >
        <ToggleButton
          text1='mensual'
          text2='trimestral'
          action1={() => setAppContext({ ...appContext, planType: 'mensual', })}
          action2={() => setAppContext({ ...appContext, planType: 'anual', })}
        />
        <div>
          <p
            style={{
              position: (width > 900) ? 'absolute' : '',
              left: 'calc(50% + 240px)',
              textTransform: 'uppercase',
              fontSize: (width > 900) ? '16px' : '14px',
            }}
          >
            Ahorrá un X%
          </p>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div
          style={{
            width: '1440px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SlidePrices />
        </div>

      </div>

      <section className="who-hero-personas__container">
        <div className="who-hero-personas__content">
          <h3>para quien es</h3>
          {/* <p>Es para vos si estás dispuest@ a cambiar. Sí entendés el poder que tenés pero lo complejo que es hacer cambios. Se necesita compromiso, empatia y paciencia.</p> */}
          <p>Es para vos si estás dispuest@ a cambiar. Sí entendés el poder que tenés en tus manos. Sí tenés mentalidad de crecimiento. Sí estás list@ para ser todo lo que podés ser.</p>
        </div>
        <div className="who-hero-personas__image" style={{ backgroundImage: `url(${group3Img})` }}></div>
      </section>
      <div className="who-hero-personas__buttons">
        <Button
          action={() => navigate('#')}
          text='Preguntas frecuentes'
          uppercase={false}
          width={(width > 430) ? '406px' : '350px'}
          fontsize='18px'
          height='60px'
          background='#f8f6f2'
          after={<img className="who-hero-personas__buttons--img" src={rightArrowImg} alt="right arrow" />}
          color='#1E1E1E'
          margin='0 0 20px 0'
          borderColor='#1E1E1E'
        />
        <Button
          action={() => navigate('/contactanos')}
          text='contactanos'
          uppercase={true}
          width={(width > 430) ? '406px' : '350px'}
          fontsize='18px'
          height='60px'
          background='#1E1E1E'
          color='#FFFFFF'
        />
      </div>
    </>
  );
};

export default Personas;