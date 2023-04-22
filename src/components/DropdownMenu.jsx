import { Link } from "react-router-dom";
import Button from "./Button";
import logob from "../assets/logo-b.svg";
import close from "../assets/close.svg";
import { useAppContext } from "../context/AppContext";
import useScreenSize from "../hooks/useScreenSize";
import { useEffect } from "react";

const DropdownMenu = () => {
  const { appContext, setAppContext } = useAppContext();
  const { width, } = useScreenSize();
  useEffect(() => {
    if (width >= 900) {
      setAppContext({ ...appContext, isMenuOpen: false, });
    };
  }, [width]);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
      }}
      className="dropmenu-container"
    >
      <div className="dropmenu-bar">
        <img className="dropmenu__logo" loading="lazy" src={logob} alt="logo maia" />
        <img
          className="dropmenu__close"
          onClick={() => setAppContext({ ...appContext, isMenuOpen: false, })}
          loading="lazy"
          src={close}
          alt="close menu"
        />
      </div>
      <div className="dropmenu__links--back">
        <div className="dropmenu__links">
          <Link onClick={() => setAppContext({ ...appContext, isMenuOpen: false, })} to="/empresas">Empresas</Link>
        </div>
        <div className="dropmenu__links">
          <Link onClick={() => setAppContext({ ...appContext, isMenuOpen: false, })} to="/personas">Personas</Link>
        </div>
        <div className="dropmenu__links">
          <Link onClick={() => setAppContext({ ...appContext, isMenuOpen: false, })} to="/equipo">Equipo</Link>
        </div>
        <div id="lastlinks" className="dropmenu__links">
          <Link onClick={() => setAppContext({ ...appContext, isMenuOpen: false, })} to="/contactanos">Contactanos</Link>
        </div>
        <div style={{ marginBottom: '15px', }}>
          <Button
            action={() => {
              setAppContext({ ...appContext, isMenuOpen: false, });
            }}
            text='Soy una persona'
            color='#FFFFFF'
            fontSize='18px'
            background='#1E1E1E'
            padding="15px"
          />
        </div>
        <div style={{ paddingBottom: '30px', borderBottom: '1px solid #1E1E1E' }}>
          <Button
            action={() => {
              setAppContext({ ...appContext, isMenuOpen: false, });
            }}
            text='Soy una organización'
            color='#FFFFFF'
            fontSize='18px'
            background='#1E1E1E'
            padding="15px"
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
