import HeroContact from "../components/HeroContact";
import InputForm from "../components/InputForm";
import ToggleButton from "../components/ToggleButton";
import { useAppContext } from "../context/AppContext";
import useScreenSize from "../hooks/useScreenSize";
import { useEffect } from "react";

const Contactanos = () => {
  const { width, } = useScreenSize();
  const { appContext, setAppContext } = useAppContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <HeroContact />
    <div
      style={{
        margin: (width > 1000) ? '65px 0 10px 135px' : (width > 450) ? '65px 0 10px 35px' : '65px 0 10px 5px',
        display: (width < 500) ? 'flex' : '',
        justifyContent: (width < 500) ? 'center' : '',
        alignItems: (width < 500) ? 'center' : '',
      }}
    >
      <ToggleButton
          text1='persona'
          text2='empresa'
          action1={() => setAppContext({ ...appContext, formType: 'persona', })}
          action2={() => setAppContext({ ...appContext, formType: 'empresa', })}
      />
    </div>
    <InputForm background="#FFFFFF" width="81%" />
    </>
  );
};

export default Contactanos;