import groupImg from '../assets/group.png';
import groupImg1 from '../assets/group1.png';
import groupImg2 from '../assets/group2.png';
import { useState } from 'react';
import useScreenSize from '../hooks/useScreenSize';
import FlashCard from './FlashCard';

const GalleryText = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const { width } = useScreenSize();
  return (
    <>
      {
        (width > 840) ? (
          <section style={{ height: '450px' }} className="section-3__container">
            <div className="section-3__card--container">
              <div
                style={{ cursor: 'pointer', height: (one || two || three) ? 'auto' : '33.33%',
                padding: one ? '30px 0 30px 110px' : '0px 0 0px 110px' }}
                onMouseEnter={() => {
                  setOne(true);
                  setTwo(false);
                  setThree(false);
                }}
                onMouseLeave={() => {
                  setOne(true);
                  setTwo(false);
                  setThree(false);
                }}
                className="section-3__card">
                <h4
                  style={{ cursor: 'pointer' }}
                  // onMouseEnter={() => {
                  //   setOne(true);
                  //   setTwo(false);
                  //   setThree(false);
                  // }}
                  // onMouseLeave={() => {
                  //   setOne(false);
                  //   setTwo(false);
                  //   setThree(false);
                  // }}
                >
                  01
                </h4>
                <div className="section-3__card--content">
                  <h5 style={{ cursor: 'pointer' }}
                    // onMouseEnter={() => {
                    //   setOne(true);
                    //   setTwo(false);
                    //   setThree(false);
                    // }}
                    // onMouseLeave={() => {
                    //   setOne(false);
                    //   setTwo(false);
                    //   setThree(false);
                    // }}
                  >
                    diagnóstico
                  </h5>
                  {(one) && <p id="section-3-text-1">Realizamos preguntas para conocer el punto de partida y crear una solución a medida.</p>}
                </div>
              </div>
              <div style={{ cursor: 'pointer', height: (one || two || three) ? 'auto' : '33.33%' }}
              onMouseEnter={() => {
                setOne(false);
                setTwo(true);
                setThree(false);
              }}
                onMouseLeave={() => {
                  setOne(false);
                  setTwo(true);
                  setThree(false);
                }} className="section-3__card">
                <h4 style={{ cursor: 'pointer' }}
                // onMouseEnter={() => {
                //   setOne(false);
                //   setTwo(true);
                //   setThree(false);
                // }}
                //   onMouseLeave={() => {
                //     setOne(false);
                //     setTwo(false);
                //     setThree(false);
                //   }}
                  >02</h4>
                <div className="section-3__card--content">
                  <h5 style={{ cursor: 'pointer' }}
                    // onMouseEnter={() => {
                    //   setOne(false);
                    //   setTwo(true);
                    //   setThree(false);
                    // }}
                    // onMouseLeave={() => {
                    //   setOne(false);
                    //   setTwo(false);
                    //   setThree(false);
                    // }}
                  >
                    acción
                  </h5>
                  {(two) && <p id="section-3-text-2">Diseñamos un plan de crecimiento personalizado para trabajar en los puntos de necesidad y creamos una mejora continua.</p>}
                </div>
              </div>
              <div style={{ cursor: 'pointer', height: (one || two || three) ? 'auto' : '33.33%',
              padding: three ? '42px 0 42px 110px' : '0px 0 0px 110px' }}
              onMouseEnter={() => {
                setOne(false);
                setTwo(false);
                setThree(true);
              }}
                onMouseLeave={() => {
                  setOne(false);
                  setTwo(false);
                  setThree(true);
                }} className="section-3__card">
                <h4 style={{ cursor: 'pointer' }}
                // onMouseEnter={() => {
                //   setOne(false);
                //   setTwo(false);
                //   setThree(true);
                // }}
                //   onMouseLeave={() => {
                //     setOne(false);
                //     setTwo(false);
                //     setThree(false);
                //   }}
                  >03</h4>
                <div className="section-3__card--content">
                  <h5 style={{ cursor: 'pointer' }}
                    // onMouseEnter={() => {
                    //   setOne(false);
                    //   setTwo(false);
                    //   setThree(true);
                    // }}
                    // onMouseLeave={() => {
                    //   setOne(false);
                    //   setTwo(false);
                    //   setThree(false);
                    // }}
                  >
                    seguimiento
                  </h5>
                  {(three) && <p id="section-3-text-3">Medimos y acompañamos a cada invidivuo en su proceso personal.</p>}
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: (one) ? `url(${groupImg})` : (two) ? `url(${groupImg1})` : `url(${groupImg2})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="section-3__result-1"
            ></div>
          </section>

        ) : (
          <div className='gallery-text__flashcard'>
            <FlashCard
              image={groupImg}
              number="01"
              title="diagnóstico"
              text="Realizamos preguntas para conocer el punto de partida y crear una solución a medida."
            />
            <FlashCard
              image={groupImg}
              number="02"
              title="acción"
              text="Diseñamos un plan de crecimiento personalizado para trabajar en los puntos de necesidad y creamos una mejora continua."
            />
            <FlashCard
              image={groupImg}
              number="03"
              title="seguimiento"
              text="Medimos y acompañamos a cada invidivuo en su proceso personal."
            />
          </div>
        )
      }
    </>

  );
};

export default GalleryText;