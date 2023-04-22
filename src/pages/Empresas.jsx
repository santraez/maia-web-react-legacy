import { useNavigate } from 'react-router-dom';
import BarIcons from "../components/BarIcons";
import HeroText from "../components/HeroText";
import Button from '../components/Button';
import CenterText from '../components/CenterText';
import GalleryText from '../components/GalleryText';
import SlideContainer from '../components/SlideContainer';
import Comments from '../components/Comments';
import heroImage from '../assets/hero-empresas.png';
import curveMd from '../assets/curve-md.svg';
import curveSm from '../assets/curve-sm.svg';
import useScreenSize from '../hooks/useScreenSize';
import waveWhiteImg from '../assets/wave-white.svg';
import beneficiosImg from '../assets/beneficios.png';
import { useEffect } from 'react';

const Empresas = () => {
  const navigate = useNavigate();
  const { width, } = useScreenSize();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <main
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className='hero-empresas__container'>
      <div
        style={{
          backgroundImage: `url(${(width > 940) ? curveMd : curveSm})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className='hero-empresas__curve'>
        <HeroText
          width='70%'
          title={(width > 700) ? "xxxxxxxxx" : null}
          // text="Somos los mejores buscando el bienestar real de las personas"
          text="Somos un Chief Happiness Officer as a service"
          button={(width > 700) ? (
            <Button 
              action={() => navigate('/contactanos')}
              text='Contactanos'
              fontsize='14px'
              uppercase={true}
              width='154px'
              height='46px'
              background='#CBE0D4'
            />
            ) : (
              null
            )
          } 
        />
      </div>
    </main>

    <div
      style={{
        width: '100%',
        display: (width < 500) ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '-22px 0 0 0',
      }}
    >
      <Button 
        action={() => navigate('/contactanos')}
        text='contactanos'
        fontSize='14px'
        uppercase={true}
        width='330px'
        fontsize='18px'
        height='46px'
        background='#649374'
        color= '#FFFFFF'
      />
    </div>

    <div style={{ margin: (width > 500) ? '90px 0 90px 0' : '0px 0 30px 0' }}>
      <CenterText
        title="cómo"
        text="Vos te enfocas en llevar adelante tu empresa, y nosotros en que las personas entén cada vez mejor."
      />
    </div>
    {/* <div style={{ margin: (width > 500) ? '50px 0 80px 0' : '0px 0' }}>
      <CenterText
        text="Entendemos qué necesitan las personas de tu equipo y les proponemos un plan de acción."
      />
    </div> */}

    <SlideContainer />

    <div style={{ margin: (width > 500) ? '110px 0 0 0' : '0px 0 0 0' }}>
      <CenterText
        title="plan de acción"
      />
    </div>
    <div style={{
      overflow: 'hidden',
    }}>
      <BarIcons />
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '75px 0 0 0',
      display: (width > 930) ? 'flex' : 'none',
    }}>
      <Button 
        action={() => navigate('/contactanos')}
        text='Quiero saber más!'
        fontSize='14px'
        uppercase={true}
        width='300px'
        fontsize='18px'
        height='50px'
        background='#649374'
        color= '#FFFFFF'
      />
    </div>
    
    <div style={{
      marginTop: '-100px',
      display: (width > 930) ? 'flex' : 'none',
    }} className='hero-circle__container'>
      <div className='hero-circle__wave' style={{ backgroundImage: `url(${waveWhiteImg})`, backgroundSize: 'cover' }}></div>
      <div className='hero-circlex__content'>
        <div
          style={{
            backgroundImage: `url(${beneficiosImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className='hero-circle__content--img'
        ></div>
        <div className='hero-circle__content--text'>
          <span>beneficios</span>
          <p className='hero-circle__text'>Las personas se sienten mejor</p>
          <p className='hero-circle__text'>Mejor clima de trabajo</p>
          <p className='hero-circle__text'>Mejor cultura</p>
          <p className='hero-circle__text'>Mayor retención y compromiso</p>
          <p className='hero-circle__text'>Mayor retorno</p>
        </div>
      </div>
    </div>
    <div style={{
      width: '100%',
      display: (width < 930 && width > 810) ? 'flex' : 'none',
      height: '90px',
      backgroundColor: 'transparent',
    }}
    ></div>
    <GalleryText />
    <div style={{ margin: (width > 530) ? '90px 0 50px 0' : '10px 0 50px 0' }}>
      <CenterText
        title="empresas que confían"
      />
    </div>
    <div style={{ margin: '0 0 65px 0' }}>
      <Comments />
    </div>
    </>
  );
};

export default Empresas;