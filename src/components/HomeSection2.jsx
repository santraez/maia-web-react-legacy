import { useState } from 'react';
import circleArrowImg from '../assets/circle-arrow.svg';
import waveImg from '../assets/wave.svg';
import useScreenSize from '../hooks/useScreenSize';

const HomeSection2 = () => {
  const { width, } = useScreenSize();
  const [state, setState] = useState(true);
  const [state2, setState2] = useState(true);
  return (
    <div className="section-2__container">
      <div style={{ backgroundImage: `url(${waveImg})` }} className="section-2__wave"></div>
      <div className="section-2__content">
        <div
          // onMouseEnter={(width > 770) ? () => setState(false) : () => setState(true)}
          // onMouseLeave={(width > 770) ? () => setState(true) : () => setState(true)}
          className='section-2__content--box'
        >
          {(state) && <p>Las personas no saben qué hacer para estar mejor</p>}
          {(!state) && ( 
            <ul style={{ marginLeft: '25px' }}>
              <li>Exceso de opciones</li>
              <li>Distracciones</li>
              <li>Falta de claridad</li>
              <li>Dificultad de cambiar</li>
            </ul>
          )}
        </div>
        <div
          onMouseEnter={
            (width > 770) ? (() => {
              setState2(false)
              setState(false)
            }) : (() => {
              setState2(true)
              setState(true)
            })
          }
          onMouseLeave={
            (width > 770) ? (() => {
              setState2(true)
              setState(true)
            }) : (() => {
              setState2(true)
              setState(true)
            })
          }
          >
            <img
              id='circleRotate'
              loading="lazy"
              src={circleArrowImg}
              alt="logo"
            /> 
        </div>
        <div
          // onMouseEnter={(width > 770) ? () => setState2(false) : () => setState2(true)}
          // onMouseLeave={(width > 770) ? () => setState2(true) : () => setState2(true)}
          className='section-2__content--box'
        >
          {(state2) && <p>Las empresas{(width > 770) ? <br/> : ' '}no saben{(width > 770) ? <br/> : ' '}como ayudarlos</p>}
          {(!state2) && ( 
            <ul style={{ marginLeft: '15px' }}>
              <li>No tienen un especialista entendiendo las necesidades de las personas</li>
              <li>No tienen las herramientas o el tiempo para acompañarlos</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
