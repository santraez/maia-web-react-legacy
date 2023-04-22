const CardPersonas = ({ icon, title, text, }) => {
  return (
    <section className="card-personas__container">
      <div className="card-personas__img-container">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </section>
  );
};

export default CardPersonas;