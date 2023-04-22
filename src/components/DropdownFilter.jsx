import { Link } from "react-router-dom";
import Button from "./Button";
import logob from "../assets/logo-b.svg";
import close from "../assets/close.svg";
import { useAppContext } from "../context/AppContext";
import useScreenSize from "../hooks/useScreenSize";
import { useEffect } from "react";

const DropdownFilter = () => {
  const { appContext, setAppContext } = useAppContext();
  const { width, } = useScreenSize();
  useEffect(() => {
    if (width >= 900) {
      setAppContext({ ...appContext, isFilterOpen: false, });
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
          onClick={() => setAppContext({ ...appContext, isFilterOpen: false, })}
          loading="lazy"
          src={close}
          alt="close menu"
        />
      </div>
      <div className="dropmenu__links--back">
        <div className="dropmenu__links">
          <Link to="#">Empresas</Link>
        </div>
        <div className="dropmenu__links">
          <Link to="#">Xxxxxxx</Link>
        </div>
        <div className="dropmenu__links">
          <Link to="#">Xxxxxxx</Link>
        </div>
        <div id="lastlinks" className="dropmenu__links">
          <Link to="#">Xxxxxxx</Link>
        </div>
        <div style={{ marginBottom: '15px', }}>
          <Button
            action={() => {
              setAppContext({ ...appContext, isFilterOpen: false, });
            }}
            text='Aplicar'
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

export default DropdownFilter;
