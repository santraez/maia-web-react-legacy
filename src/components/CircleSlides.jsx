import { useState } from "react";
import fisicoImg from '../assets/fisico.svg';
import profesionalImg from '../assets/profesional.svg';
import vinculosImg from '../assets/vinculos.svg';
import mentalImg from '../assets/mental.svg';
import espiritualImg from '../assets/espiritual.svg';
import Button from "./Button";
import waveWhiteImg from '../assets/wave-white.svg';
import waveImg from '../assets/wave.svg';

const optionValues = {
  fisico: [
    fisicoImg,
    [
      'Nutrición',
      'Descanso',
      'Deporte',
      'Movimiento',
    ],
  ],
  profesional: [
    profesionalImg,
    [
      'Equilibrio',
      'Relaciones laborales',
      'Motivación',
      'Finanzas',
    ],
  ],
  vinculos: [
    vinculosImg,
    [
      'Comunicación',
      'Autenticidad',
      'Reciprocidad',
    ],
  ],
  mental: [
    mentalImg,
    [
      'Estrés',
      'Gestión emocional',
      'Autoestima',
      'Mentalidad de crecimiento',
      'Concentración',
      'Creatividad',
    ],
  ],
  espiritual: [
    espiritualImg,
    [
      'Signficado',
      'Gratitud',
      'Conciencia',
      'Conexión',
    ],
  ],
};

const CircleSlides = ({ wave=true, background='#CBE0D4', waveWhite=true, showList=true }) => {
  const [option, setOption] = useState('fisico');
  return (
    <div style={{
      backgroundColor: background,
    }} className="circle-slides__container">
      {(wave) ? (
      <div
        style={{
          backgroundImage: (waveWhite) ? `url(${waveWhiteImg})` : `url(${waveImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '70px',
          margin: '0 0 50px 0',
        }}
      ></div>
      ) : (
        null
      )}
      <div className="circle-slides__buttons">
        <div className="circle-slides__button">
          <Button 
            action={() => setOption('fisico')}
            text='Físico'
            uppercase={false}
            margin='0 10px 0 0'
            width='170px'
            fontsize='19px'
            hover={false}
            before={
              <img
                style={{
                  filter: `brightness(${(option === 'fisico') ? '4000%' : '100%'})`,
                }}
                className="circle-slides__buttons--img"
                src={fisicoImg}
                alt={option}
              />
            }
            height='46px'
            background={(option === 'fisico') ? '#649374' : '#FFFFFF'}
            color= {(option === 'fisico') ? '#FFFFFF' : '#1E1E1E'}
          />
        </div>
        <div className="circle-slides__button">
          <Button 
            action={() => setOption('profesional')}
            text='Profesional'
            uppercase={false}
            width='170px'
            fontsize='19px'
            hover={false}
            before={
              <img
                style={{
                  filter: `brightness(${(option === 'profesional') ? '4000%' : '100%'})`,
                }}
                className="circle-slides__buttons--img"
                src={profesionalImg}
                alt={option}
              />
            }
            height='46px'
            background={(option === 'profesional') ? '#649374' : '#FFFFFF'}
            color= {(option === 'profesional') ? '#FFFFFF' : '#1E1E1E'}
          />
        </div>
        <div className="circle-slides__button">
          <Button 
            action={() => setOption('vinculos')}
            text='Vínculos'
            uppercase={false}
            width='170px'
            fontsize='19px'
            hover={false}
            before={
              <img
                style={{
                  filter: `brightness(${(option === 'vinculos') ? '4000%' : '100%'})`,
                }}
                className="circle-slides__buttons--img"
                src={vinculosImg}
                alt={option}
              />
            }
            height='46px'
            background={(option === 'vinculos') ? '#649374' : '#FFFFFF'}
            color= {(option === 'vinculos') ? '#FFFFFF' : '#1E1E1E'}
          />
        </div>
        <div className="circle-slides__button">
          <Button 
            action={() => setOption('mental')}
            text='Mental'
            uppercase={false}
            width='170px'
            fontsize='19px'
            hover={false}
            before={
              <img
                style={{
                  filter: `brightness(${(option === 'mental') ? '4000%' : '100%'})`,
                }}
                className="circle-slides__buttons--img"
                src={mentalImg}
                alt={option}
              />
            }
            height='46px'
            background={(option === 'mental') ? '#649374' : '#FFFFFF'}
            color= {(option === 'mental') ? '#FFFFFF' : '#1E1E1E'}
          />
        </div>
        <div className="circle-slides__button">
          <Button 
            action={() => setOption('espiritual')}
            text='Espiritual'
            uppercase={false}
            width='170px'
            fontsize='19px'
            hover={false}
            before={
              <img
                style={{
                  filter: `brightness(${(option === 'espiritual') ? '4000%' : '100%'})`,
                }}
                className="circle-slides__buttons--img"
                src={espiritualImg}
                alt={option}
              />
            }
            height='46px'
            background={(option === 'espiritual') ? '#649374' : '#FFFFFF'}
            color= {(option === 'espiritual') ? '#FFFFFF' : '#1E1E1E'}
          />
        </div>
      </div>
      <div className="circle-slides__circle--back">
        <div className="circle-slides__circle">
          <img src={optionValues[option][0]} alt={option} />
          {
            optionValues[option][1].map((item, index) => (
              <span key={index}>{item}</span>
            ))
          }
        </div>
      </div>
      <div
        style={{
          display: (showList) ? 'flex' : 'none',
        }}
        className="circle-slides__beneficios"
      >
        <h4>beneficios</h4>
        <ol>
          <li>
            <span>Las personas se sienten mejor.</span>
          </li>
          <li>
            <span>Mejor clima de trabajo.</span>
          </li>
          <li>
            <span>Mejor cultura.</span>
          </li>
          <li>
            <span>Mayor retención y compromiso.</span>
          </li>
          <li>
            <span>Mayor retorno.</span>
          </li>
        </ol>
      </div>
      {(wave) ? (
      <div
        style={{
          backgroundImage: (waveWhite) ? `url(${waveWhiteImg})` : `url(${waveImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '70px',
          transform: 'rotate(180deg)',
          margin: '50px 0 0 0',
        }}
      ></div>
      ) : (
        null
      )}
    </div>
  );
};

export default CircleSlides;