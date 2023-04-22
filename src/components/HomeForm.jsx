import CenterText from "./CenterText";
import InputForm from "./InputForm";
import ToggleButton from "./ToggleButton";
import { useAppContext } from "../context/AppContext";

const HomeForm = () => {
  const { appContext, setAppContext } = useAppContext();
  return (
    <section className="form__container">
      <CenterText title={'agendá una llamada'} />
      <div className="form__toggle-pad">
        <ToggleButton
          text1='persona'
          text2='empresa'
          action1={() => setAppContext({ ...appContext, formType: 'persona', })}
          action2={() => setAppContext({ ...appContext, formType: 'empresa', })}
        />
      </div>
      <InputForm />
    </section>
  );
};

export default HomeForm;
