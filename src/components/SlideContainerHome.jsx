import SlideBoxHome from '../components/SlideBoxHome';
import slide1Img from '../assets/slide1.png';
import slide2Img from '../assets/slide2.png';
import useScreenSize from '../hooks/useScreenSize';

const SlideContainerHome = () => {
  const { width, } = useScreenSize();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: (width > 830) ? 'row' : 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        padding: '80px 0px',
        backgroundColor: '#F8F6F2',
      }}
    >
      <SlideBoxHome
        image={slide1Img}
        title="Las personas no saben qué hacer para estar mejor."
        text={['Exceso de opciones.', 'Distracciones.', 'Falta de claridad.', 'Dificultad de cambiar.']}
        width={(width > 1270) ? '600px' : '365px'}
        height={(width > 1270) ? '580px' : '353px'}
        radius="50px"
      />
      <SlideBoxHome
        image={slide2Img}
        title="Las empresas no saben como ayudarlos."
        text={(width > 1270) ? ['No tienen un especialista entendiendo las necesidades de las personas.', 'No tienen las herramientas o el tiempo para acompañarlos.'] : ['No tienen un especialista entendiendo las necesidades de las personas.']}
        width={(width > 1270) ? '600px' : '365px'}
        height={(width > 1270) ? '580px' : '353px'}
        radius='50px'
      />
    </div>
  );
};

export default SlideContainerHome;