import CardPrice from "./CardPrice";
import { useAppContext } from "../context/AppContext";

const contextValue = {
  mensual: {
    basico: '7.000',
    intermedio: '20.000',
    full: '38.000',
  },
  anual: {
    basico: '6.000',
    intermedio: '18.000',
    full: '36.000',
  },
};

const SlidePrices = () => {
  const { appContext, } = useAppContext();
  return (
    <section className="slide-prices__container">
      <CardPrice
        title='básico'
        prices={contextValue[appContext.planType].basico}
        text='1 sesión por mes + seguimiento personalizado por whatsapp'
        subtext="Duración 45' | Modalidad Videollamada"
      />
      <CardPrice
        title='intermedio'
        prices={contextValue[appContext.planType].intermedio}
        text='3 sesiones + seguimiento personalizado por whatsapp'
        subtext="Duración 45' | Modalidad Videollamada"
      />
      <CardPrice
        title='full'
        prices={contextValue[appContext.planType].full}
        text='6 sesiones + seguimiento personalizado por whatsapp'
        subtext="Duración 45' | Modalidad Videollamada"
      />
    </section>
  );
};

export default SlidePrices;