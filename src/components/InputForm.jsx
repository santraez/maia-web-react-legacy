import { useAppContext } from "../context/AppContext";
import { useState } from "react";

const valuesInput = {
  empresa: {
    input1: ['Nombre', 'text'],
    input2: ['Empresa', 'text'],
    input3: ['Email', 'email'],
    input4: ['Teléfono', 'tel'],
    input5: ['Algo mas que nos quieras contar?', 'text'],
  },
  persona: {
    input1: ['Nombre', 'text'],
    input2: ['Email', 'email'],
    input3: ['Teléfono', 'tel'],
    input4: [
      {
        question: 'Donde queres hacer foco?',
        options: [
          'salud fisica',
          'mentalidad',
          'profesional',
          'vinculos',
          'espiritual',
          'no lo sé',
        ],
      },
      'select',
    ],
    input5: ['Algo mas que nos quieras contar?', 'text'],
  },
};

const InputForm = ({ background='#F8F6F2', width='65%' }) => {
  const { appContext, } = useAppContext();
  const [open, setOpen] = useState(false);
  return (
    <section style={{ backgroundColor: background }} className="form__container">
      <form style={{ width: width }}>
        <input name='Type' type="hidden" value={appContext.formType} />
        <input name='Name' type="text" placeholder={valuesInput[appContext.formType].input1[0]} />
        <input name={valuesInput[appContext.formType].input2[0]} type={valuesInput[appContext.formType].input2[1]} placeholder={valuesInput[appContext.formType].input2[0]} />
        <input name={valuesInput[appContext.formType].input3[0]} type={valuesInput[appContext.formType].input3[1]} placeholder={valuesInput[appContext.formType].input3[0]} />
        {
          (appContext.formType === 'empresa') ? (
            <input name={valuesInput[appContext.formType].input4[0]} type={valuesInput[appContext.formType].input4[1]} placeholder={valuesInput[appContext.formType].input4[0]} />
          ) : (
            <div style={{ width: '100%' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                paddingBottom: '10px',
                borderBottom: '1px solid #1E1E1E',
                marginBottom: '42px',
                marginTop: '10px',
              }} onClick={() => setOpen(!open)}>
                <p style={{
                  userSelect: 'none',
                  color: (open) ? '#1E1E1E' : '#81807e',
                  fontSize: '28px',
                }}>{valuesInput.persona.input4[0].question}</p>
                {(open) && <span style={{ fontSize: '20px', color: '#1E1E1E', }}>▲</span>}
                {(!open) && <span style={{ fontSize: '20px', color: '#81807e', }}>▼</span>}
              </div>
              { 
                (open) && (
                  <div style={{
                    marginTop: '20px',
                    paddingLeft: '15px',
                    marginBottom: '30px',
                  }}>
                    {
                      valuesInput.persona.input4[0].options.map((option, index) => (
                        <div style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginBottom: '10px',
                        }}>
                          <input style={{
                            margin: '0px 10px 0px 0px',
                            width: '20px',
                            height: '20px',
                          }} type="checkbox" className="form__select--option" key={index} name={option} value={option} />
                          <label style={{
                            fontSize: '20px',
                            textTransform: 'capitalize',
                          }} htmlFor={option}>{option}</label>
                        </div>
                      ))
                    }
                  </div>
                )
              }
            </div>            
          )
        }

        <input name='Observation' type="text" placeholder={valuesInput[appContext.formType].input5[0]} />
        <div className="form-button-enviar">
          <input name='Button' style={{ cursor: 'pointer' }} type="button" className="form__input-button" value="enviar" />
        </div>
      </form>
    </section>
  );
};

export default InputForm;