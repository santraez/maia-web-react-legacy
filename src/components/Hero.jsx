import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero.png';
import Button from './Button';
import HeroText from './HeroText';
import useScreenSize from '../hooks/useScreenSize';

const Hero = () => {
  const navigate = useNavigate();
  const { width, } = useScreenSize();
  return (
    <main style={{
      backgroundImage: `url(${heroImage})`,
      height: (width > 500) ? '548px' : '465px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }} className="hero__container">
      <HeroText
        width={(width>760) ? ((width > 1400) ? '50%' : '60%') : '70%'}
        title="propósito"
        text="Acompañamos a las personas en su proceso de crecimiento personal"
        subtext="Con nuestro enfoque integral y acompañamiento personalizado"
        button={(width > 500) ? (
          <Button 
            action={() => navigate('/contactanos')}
            text='Contactanos'
            fontsize='14px'
            uppercase={true}
            width='154px'
            height='46px'
          />
        ) : null
        }
      />
  </main>
  );
};

export default Hero;