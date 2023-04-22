import logo from '../assets/logo.svg';
import arrowImg from '../assets/arrow.svg';
import linkedinImg from '../assets/linkedin.svg';
import instagramImg from '../assets/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__data">
        <img loading="lazy" src={logo} alt="logo" /> 
        <div className="footer__data--text">
          <img loading="lazy" src={arrowImg} alt="logo" /> 
          <p>Av Libertador 7208<br/>contacto@maia.com.ar<br/>(+54) 11 6908 4578</p>
        </div>
      </div>
      <div className="footer-network">
        <img id="footer-linkedin" loading="lazy" src={linkedinImg} alt="logo" /> 
        <img id="footer-instagram" loading="lazy" src={instagramImg} alt="logo" /> 
      </div>
    </footer>
  );
};

export default Footer;