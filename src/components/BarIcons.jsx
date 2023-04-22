import { useState } from 'react';
import fisicoImg from '../assets/fisico.svg';
import profesionalImg from '../assets/profesional.svg';
import vinculosImg from '../assets/vinculos.svg';
import mentalImg from '../assets/mental.svg';
import espiritualImg from '../assets/espiritual.svg';
import CircleSlides from './CircleSlides';
import useScreenSize from '../hooks/useScreenSize';
import { useEffect } from 'react';

const BarIcons = ({ wave=true, background='#CBE0D4', waveWhite=true, showList=true }) => {
  const { width, } = useScreenSize();
  const [fisico , setFisico] = useState(true);
  const [mental , setMental] = useState(true);
  const [vinculos , setVinculos] = useState(true);
  const [profesional , setProfesional] = useState(true);
  const [espiritual , setEspiritual] = useState(true);
  useEffect (() => {
    if (width < 810) {
      setFisico(true);
      setMental(true);
      setVinculos(true);
      setProfesional(true);
      setEspiritual(true);
    }
  }, [width]);
  return (
    <>
    {
      (width > 810) ? (
        <div className="section-1__bar-icons">
          <div className="section-1__bar-icons--element">
            {(fisico) && <img id="section-1-svg1" loading="lazy" src={fisicoImg} alt="logo" />}
            {(!fisico) && (
              <div className='section-1__bar--box'>
                <ul>
                  <li>Nutrición</li>
                  <li>Descanso</li>
                  <li>Deporte</li>
                  <li>Movimiento</li>
                </ul>
              </div>
            )}
            <p onClick={() => {
              setFisico(!fisico);
              setMental(true);
              setVinculos(true);
              setProfesional(true);
              setEspiritual(true);
            }} style={{ zIndex: 98 }}>Físico</p>
          </div>
          <div className="section-1__bar-icons--element">
            {(mental) && <img id="section-1-svg2" loading="lazy" src={mentalImg} alt="logo" />}
            {(!mental) && (
              <div className='section-1__bar--box'>
                <ul>
                  <li>Estrés</li>
                  <li>Gestión emocional</li>
                  <li>Autoestima</li>
                  <li>Mentalidad de crecimiento</li>
                  <li>Concentración</li>
                  <li>Creatividad</li>
                </ul>
              </div>
            )}
            <p onClick={() => {
              setMental(!mental);
              setFisico(true);
              setVinculos(true);
              setProfesional(true);
              setEspiritual(true);
            }} style={{ zIndex: 98 }}>Mental</p>
          </div>
          <div className="section-1__bar-icons--element">
            {(vinculos) && <img id="section-1-svg3" loading="lazy" src={vinculosImg} alt="logo" />}
            {(!vinculos) && (
              <div className='section-1__bar--box'>
                <ul>
                  <li>Comunicación</li>
                  <li>Autenticidad</li>
                  <li>Reciprocidad</li>
                </ul>
              </div>
            )}
            <p onClick={() => {
              setVinculos(!vinculos);
              setFisico(true);
              setMental(true);
              setProfesional(true);
              setEspiritual(true);
            }} style={{ zIndex: 98 }}>Vińculos</p>
          </div>
          <div className="section-1__bar-icons--element">
            {(profesional) && <img id="section-1-svg4" loading="lazy" src={profesionalImg} alt="logo" />}
            {(!profesional) && (
              <div className='section-1__bar--box'>
                <ul>
                  <li>Equilibrio</li>
                  <li>Relaciones laborales</li>
                  <li>Motivación</li>
                  <li>Finanzas</li>
                </ul>
              </div>
            )}
            <p onClick={() => {
              setProfesional(!profesional);
              setFisico(true);
              setMental(true);
              setVinculos(true);
              setEspiritual(true);
            }} style={{ zIndex: 98 }}>Profesional</p>
          </div>
          <div className="section-1__bar-icons--element">
            {(espiritual) && <img id="section-1-svg5" loading="lazy" src={espiritualImg} alt="logo" />}
            {(!espiritual) && (
              <div className='section-1__bar--box'>
                <ul>
                  <li>Significado</li>
                  <li>Gratitud</li>
                  <li>Conciencia</li>
                  <li>Conexión</li>
                </ul>
              </div>
            )}
            <p onClick={() => {
              setEspiritual(!espiritual);
              setFisico(true);
              setMental(true);
              setVinculos(true);
              setProfesional(true);
            }} style={{ zIndex: 98 }}>Espiritual</p>
          </div>
        </div>
      ) : (
        <CircleSlides wave={wave} background={background} waveWhite={waveWhite} showList={showList} />
      )
    }
    </>
  );
};

export default BarIcons;