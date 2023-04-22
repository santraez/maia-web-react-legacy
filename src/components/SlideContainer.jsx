import SlideBox from '../components/SlideBox';
import slide1Img from '../assets/slide1.png';
import slide2Img from '../assets/slide2.png';
import useScreenSize from '../hooks/useScreenSize';

const SlideContainer = () => {
  const { width, } = useScreenSize();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: (width > 830) ? 'row' : 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <SlideBox
        image={slide1Img}
        title="Problemática"
        text={(width > 1270) ? (
          // "Realizamos preguntas para conocer el punto de partida y crear una solución a"
          "Los beneficios que ofrecen hoy en las empresas se dan sin saber que necesitan las personas. Eso se traduce en un desperdicio de recursos y tiempo."
          ) : (
            // "Realizamos preguntas para conocer el punto"
            "Los beneficios que ofrecen hoy en las empresas se dan sin saber que necesitan las personas."
        )}
        width={(width > 1270) ? '600px' : '365px'}
        height={(width > 1270) ? '580px' : '353px'}
        radius="50px"
      />
      <SlideBox
        image={slide2Img}
        title="Solución"
        text={(width > 1270) ? (
          // "Realizamos preguntas para conocer el punto de partida y crear una solución a"
          "Realizamos un diagnóstico que nos permite entender que necesitan los colaboradores y desde ahí planteamos un plan de acción a medida."
          ) : (
            // "Realizamos preguntas para conocer el punto"
            "Realizamos un diagnóstico que nos permite entender que necesitan los colaboradores y desde ahí planteamos un plan de acción a medida."
        )}
        width={(width > 1270) ? '600px' : '365px'}
        height={(width > 1270) ? '580px' : '353px'}
        radius='50px'
      />
    </div>
  );
};

export default SlideContainer;