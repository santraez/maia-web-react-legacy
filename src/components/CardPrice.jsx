import CenterText from "./CenterText";
import Button from "./Button";

const CardPrice = ({ title, prices, text, subtext, }) => {
  return (
    <div className="card-price__container">
      <div>
        <h3>
          {title}
        </h3>
      </div>
      <h4>
        {`$${prices} `}
        <span>/ mes</span>
      </h4>
      <h5>
        {text}
      </h5>
      <p>
        {subtext}
      </p>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button 
          action={() => {}}
          text='reservar'
          fontSize='14px'
          uppercase={true}
          width='180px'
          fontsize='18px'
          height='50px'
          background='#649374'
          color= '#FFFFFF'
        />
      </div>
    </div>
  );
};

export default CardPrice;