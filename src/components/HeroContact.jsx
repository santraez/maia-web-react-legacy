import useScreenSize from "../hooks/useScreenSize";

const HeroContact = () => {
  const { width, } = useScreenSize();
  return (
    <main className="hero-contact__container">
      <h2 className="hero-contact__title">Hablemos!</h2>
      <p className="hero-contact__text">
        {
          (width > 750) ? (
            '¿Querés saber más sobre nosotros? ¿Te preguntas si es el curso adecuado para vos? Escribinos para concertar una charla con nuestro equipo.'
          ) : (
            'Escribinos para concertar una charla con nuestro equipo.'
          )
        }
      </p>
    </main>
  );
};

export default HeroContact;