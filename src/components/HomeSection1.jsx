import BarIcons from './BarIcons';
import Button from './Button';
import CenterText from './CenterText';
import { useNavigate } from 'react-router-dom';

const HomeSection1 = () => {
  const navigate = useNavigate();
  return (
    <section className="section-1__container">
      <div className='button-section-1-top'>
        <Button 
          action={() => navigate('/contactanos')}
          text='contactanos'
          fontSize='14px'
          uppercase={true}
          width='330px'
          fontsize='18px'
          height='46px'
          background='#649374'
          color= '#FFFFFF'
        />
      </div>
      <div className='center-text-section-1-top'>
        <CenterText
          title="como"
          text="Con nuestro enfoque integral y acompañamiento personalizado"
        />
      </div>
      <div style={{
        overflow: 'hidden',
      }} className='bar-icons-section-1-top'>
        <BarIcons wave={false} background='#F8F6F2' waveWhite={false} showList={false} />
      </div>
      <Button 
        action={() => navigate('/contactanos')}
        text='Quiero saber más!'
        fontSize='14px'
        uppercase={true}
        width='300px'
        fontsize='18px'
        height='50px'
        background='#649374'
        color= '#FFFFFF'
      />
    </section>
  );
};

export default HomeSection1;