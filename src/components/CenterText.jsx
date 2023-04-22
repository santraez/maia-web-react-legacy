const CenterText = ({ title, text, }) => {
  return (
    <section style={{ backgroundColor: 'transparent', }} className="section-1__container">
      {(title) && <p style={{ marginTop: '0px',  }}>{title}</p>}
      {(text) && <h2>{text}</h2>}
    </section>
  );
};

export default CenterText;