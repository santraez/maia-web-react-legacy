import CenterText from "../components/CenterText";
import GalleryGrid from "../components/GalleryGrid";
import GalleryGridCircle from "../components/GalleryGridCircle";
import Hero from "../components/Hero";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import useScreenSize from '../hooks/useScreenSize';
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";

const Equipo = () => {
  const navigate = useNavigate();
  const { width } = useScreenSize();
  const { appContext, setAppContext } = useAppContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Hero />
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
    <div
      style={{
        margin: (width > 500) ? '80px 0 55px 0' : '0px 0 20px 0',
        width: '100%'
      }}
    >
      <CenterText
        title="Tutores y especialistas"
      />
    </div>
    <div
      style={{
        width: '100%',
        display: (width < 1170) ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 0 30px 0',
      }}
    >
      <Button 
        action={() => setAppContext({ ...appContext, isFilterOpen: true, })}
        text='filtrar'
        fontSize='14px'
        uppercase={true}
        width='160px'
        fontsize='16px'
        height='46px'
        background='#FFFFFF'
        color= '#649374'
        borderColor='#649374'
      />
    </div>
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GalleryGrid />
    </div>
    <div style={{ margin: (width > 1370) ? '90px 0 40px 0' : (width > 531) ? '45px 0 45px 0' : '0px 0 45px 0'}}>
      <CenterText
        title="Equipo"
      />
    </div>
    <div
      style={{
        margin: (width > 620) ? '0 0 200px 0px' : '0 0 90px 0px',
        padding: (width > 1370) ? '0 130px' : ((width > 1370) ? '0 60px' : '0 0px'),
      }}
    >
      <GalleryGridCircle />
    </div>
    </>
  );
};

export default Equipo;