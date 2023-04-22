import pabloImg from '../assets/pablo.png';
import josefina1Img from '../assets/josefina1.png';
import josefina2Img from '../assets/josefina2.png';
import guillerminaImg from '../assets/guillermina.png';
import leonardoImg from '../assets/leonardo.png';
import PhotoText from './PhotoText';
import useScreenSize from '../hooks/useScreenSize';

const GalleryGrid = () => {
  const { width, } = useScreenSize();
  return (
    <div className='gallery-grid__container'>
      <div className='gallery-grid__item'>
        <PhotoText
          photo={pabloImg}
          name="Pablo"
          lastname="Ruiz"
          subtitle="Especialista en xxxx"
          text={(width <= 1170) ? (
            'lorem ipsum dolor sit amet, consectetur adipiscing elit'
          ) : (
            'lorem ipsum dolor sit amet, consectetur adipiscing elit loremlorem ipsum dolor sit amet, consectetur adipiscing elit loremlorem adipiscing elit loremlorem'
          )}
          width={(width <= 1170) ? '211px' : '370px'}
          height={(width <= 1170) ? '244px' :'427px'}
        />
      </div>
      <div className='gallery-grid__item'>
        <PhotoText
          photo={pabloImg}
          name="Pablo"
          lastname="Ruiz"
          subtitle="Especialista en xxxx"
          text={(width <= 1170) ? (
            'lorem ipsum dolor sit amet, consectetur adipiscing elit'
          ) : (
            'lorem ipsum dolor sit amet, consectetur adipiscing elit loremlorem ipsum dolor sit amet, consectetur adipiscing elit loremlorem adipiscing elit loremlorem'
          )}
          width={(width <= 1170) ? '211px' : '370px'}
          height={(width <= 1170) ? '244px' :'427px'}
        />
      </div>
      <div className='gallery-grid__item'>
        <PhotoText
          photo={josefina1Img}
          name="Josefina"
          lastname="Gonzalez"
          subtitle="Especialista en xxxx"
          text={(width <= 1170) ? (
            'lorem ipsum dolor sit amet, consectetur adipiscing elit'
          ) : (
            'lorem ipsum dolor sit amet, consectetur adipiscing elit loremlorem ipsum dolor sit amet, consectetur adipiscing elit loremlorem adipiscing elit loremlorem'
          )}
          width={(width <= 1170) ? '211px' : '370px'}
          height={(width <= 1170) ? '244px' :'427px'}
        />
      </div>
      <div className='gallery-grid__item'>
        <PhotoText
          photo={guillerminaImg}
          name="Guillermina"
          lastname="Cisneros"
          subtitle="Especialista en xxxx"
          text={(width <= 1170) ? (
            'lorem ipsum dolor sit amet, consectetur adipiscing elit'
          ) : (
            'lorem ipsum dolor sit amet, consectetur adipiscing elit loremlorem ipsum dolor sit amet, consectetur adipiscing elit loremlorem adipiscing elit loremlorem'
          )}
          width={(width <= 1170) ? '211px' : '370px'}
          height={(width <= 1170) ? '244px' :'427px'}
        />
      </div>
      <div className='gallery-grid__item'>
        <PhotoText
          photo={leonardoImg}
          name="Leonardo"
          lastname="Manjarrez"
          subtitle="Especialista en xxxx"
          text={(width <= 1170) ? (
            'lorem ipsum dolor sit amet, consectetur adipiscing elit'
          ) : (
            'lorem ipsum dolor sit amet, consectetur adipiscing elit loremlorem ipsum dolor sit amet, consectetur adipiscing elit loremlorem adipiscing elit loremlorem'
          )}
          width={(width <= 1170) ? '211px' : '370px'}
          height={(width <= 1170) ? '244px' :'427px'}
        />
      </div>
      <div className='gallery-grid__item'>
        <PhotoText
          photo={josefina2Img}
          name="Josefina"
          lastname="Gonzalez"
          subtitle="Especialista en xxxx"
          text={(width <= 1170) ? (
            'lorem ipsum dolor sit amet, consectetur adipiscing elit'
          ) : (
            'lorem ipsum dolor sit amet, consectetur adipiscing elit loremlorem ipsum dolor sit amet, consectetur adipiscing elit loremlorem adipiscing elit loremlorem'
          )}
          width={(width <= 1170) ? '211px' : '370px'}
          height={(width <= 1170) ? '244px' :'427px'}
        />
      </div>
    </div>
  );
};

export default GalleryGrid;