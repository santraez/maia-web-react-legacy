import PhotoCircle from "./PhotoCircle";
import sm1Img from "../assets/sm1.png";
import sm3Img from "../assets/sm3.png";
import sm4Img from "../assets/sm4.png";
import sm5Img from "../assets/sm5.png";
import sm6Img from "../assets/sm6.png";
import sm7Img from "../assets/sm7.png";
import sm8Img from "../assets/sm8.png";
import useScreenSize from '../hooks/useScreenSize';

const GalleryGridCircle = () => {
  const { width, } = useScreenSize();
  return (
    <div className='gallery-grid-circle__container'>
      <div className='gallery-grid-circle__item'>
        <PhotoCircle
          photo={sm1Img}
          name="Pablo Ruiz"
          text='Co-founder & Chief Executive Officer'
          width={(width <= 620) ? '148px' : '260px'}
          height={(width <= 620) ? '148px' :'260px'}
        />
      </div>
      <div className='gallery-grid-circle__item'>
        <PhotoCircle
          photo={sm1Img}
          name="Pablo Ruiz"
          text='Co-founder & Chief Executive Officer'
          width={(width <= 620) ? '148px' : '260px'}
          height={(width <= 620) ? '148px' :'260px'}
        />
      </div>
      <div className='gallery-grid-circle__item'>
        <PhotoCircle
          photo={sm3Img}
          name="Pablo Ruiz"
          text='Co-founder & Chief Executive Officer'
          width={(width <= 620) ? '148px' : '260px'}
          height={(width <= 620) ? '148px' :'260px'}
        />
      </div>
      <div className='gallery-grid-circle__item'>
        <PhotoCircle
          photo={sm4Img}
          name="Pablo Ruiz"
          text='Co-founder & Chief Executive Officer'
          width={(width <= 620) ? '148px' : '260px'}
          height={(width <= 620) ? '148px' :'260px'}
        />
      </div>
      <div className='gallery-grid-circle__item'>
        <PhotoCircle
          photo={sm5Img}
          name="Pablo Ruiz"
          text='Co-founder & Chief Executive Officer'
          width={(width <= 620) ? '148px' : '260px'}
          height={(width <= 620) ? '148px' :'260px'}
        />
      </div>
      <div className='gallery-grid-circle__item'>
        <PhotoCircle
          photo={sm6Img}
          name="Pablo Ruiz"
          text='Co-founder & Chief Executive Officer'
          width={(width <= 620) ? '148px' : '260px'}
          height={(width <= 620) ? '148px' :'260px'}
        />
      </div>
      <div className='gallery-grid-circle__item'>
        <PhotoCircle
          photo={sm7Img}
          name="Pablo Ruiz"
          text='Co-founder & Chief Executive Officer'
          width={(width <= 620) ? '148px' : '260px'}
          height={(width <= 620) ? '148px' :'260px'}
        />
      </div>
      <div className='gallery-grid-circle__item'>
        <PhotoCircle
          photo={sm8Img}
          name="Pablo Ruiz"
          text='Co-founder & Chief Executive Officer'
          width={(width <= 620) ? '148px' : '260px'}
          height={(width <= 620) ? '148px' :'260px'}
        />
      </div>
    </div>
  );
};

export default GalleryGridCircle;