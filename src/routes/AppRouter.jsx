import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Home from "../pages/Home";
import Empresas from "../pages/Empresas";
import Personas from "../pages/Personas";
import Equipo from "../pages/Equipo";
import Contactanos from "../pages/Contactanos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DropdownMenu from "../components/DropdownMenu";
import DropdownFilter from "../components/DropdownFilter";
import { useEffect } from "react";
import { useRef } from "react";

const AppRouter = () => {
  const { appContext:{ isMenuOpen, isFilterOpen } } = useAppContext();
  const ref = useRef(); 
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        ref.current.style.position = "sticky";
        ref.current.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.75)";
      } else {
        ref.current.style.position = "";
      };
      if (window.pageYOffset === 0) {
        ref.current.style.boxShadow = "none";
      };
      prevScrollpos = currentScrollPos;
    }
  }, []);
  return (
    <BrowserRouter>
      {(isMenuOpen) && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.7)',
          zIndex: 10001,
        }}>
          <DropdownMenu />
        </div>
      )}
      {(isFilterOpen) && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.7)',
          zIndex: 10001,
        }}>
          <DropdownFilter />
        </div>
      )}
      <div ref={ref} style={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#1E1E1E',
        zIndex: 10000,
        boxShadow: "none",
      }}>
        <Header />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#1E1E1E',
      }}>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;