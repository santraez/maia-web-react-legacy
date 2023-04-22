import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburgerImg from "../assets/hamburger.svg";
import Button from "./Button";
import useScreenSize from "../hooks/useScreenSize";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const navigate = useNavigate();
  const { width } = useScreenSize();
  const { appContext, setAppContext } = useAppContext();
  return (
    <header className="header__container">
      <div onClick={() => navigate('/')} className="header__logo">
        <img loading="lazy" src={logo} alt="logo maia" /> 
      </div>
      <div className="header__menu">
        <Link to="/empresas">empresas</Link>
        <Link to="/personas">personas</Link>
        <Link to="/equipo">equipo</Link>
      </div>
      {
        (width >= 900) && (
          <Button 
            action={() => navigate('/contactanos')}
            text='Contactanos'
            fontsize='14px'
            uppercase={true}
            width='154px'
            height='46px'
          />
        )
      }
      <div className="header__icon-menu">
        <img
          style={{ cursor: 'pointer' }}
          onClick={() => setAppContext({ ...appContext, isMenuOpen: true, })}
          loading="lazy"
          src={hamburgerImg}
          alt="hamburger button"
        /> 
      </div>
    </header>
  );
};

export default Header;