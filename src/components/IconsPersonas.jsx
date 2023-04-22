import CardPersonas from "./CardPersonas";
import conocerteImg from "../assets/conocerte.svg";
import trabajarImg from "../assets/trabajar.svg";
import acompañarImg from "../assets/acompañarte.svg";
import brindarteImg from "../assets/brindarte.svg";

const IconsPersonas = () => {
  return (
    <section className="icons-personas__container">
      <CardPersonas
        icon={conocerteImg}
        title="Conocerte"
        text="en profundidad"
      />
      <CardPersonas
        icon={trabajarImg}
        title="Trabajar en"
        text="tus oportunidades de mejora"
      />
      <CardPersonas
        icon={acompañarImg}
        title="Acompañarte"
        text="a cumplirte"
      />
      <CardPersonas
        icon={brindarteImg}
        title="Brindarte"
        text="herramientas"
      />
    </section>
  );
};

export default IconsPersonas;