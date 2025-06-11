import React, { useRef, useState } from 'react';
import LoveButton from './LoveButton';
import './Panel.css';

function Panel() {
  const naoBtn = useRef();
  const [naoVisible, setNaoVisible] = useState(true);
  const [buff, setBuff] = useState(false);

  function buffEDesaparece() {
    setBuff(true);
    setTimeout(() => {
      setNaoVisible(false);
      setBuff(false);
    }, 200);
  }

  return (
    <div className="painel">
      <h1>
        Feliz dia dos namorados<br />
        Amor da minha vida!
      </h1>
      <img
        src="https://gifman.net/wp-content/uploads/2019/06/ursinho-fofo-apaixonado.gif"
        alt="Ursinho apaixonado"
      />
      <h2>Você me ama?</h2>
      <div className="botoes">
        <LoveButton
          tipo="sim"
          onClick={() => window.open("https://drive.google.com/file/d/1NOKthklQoM_P-HmsE4rNNqVflDI3gpJa/view?usp=sharing", "_blank")}
        >
          Sim!
        </LoveButton>
        {naoVisible && (
          <LoveButton
            tipo="nao"
            ref={naoBtn}
            onClick={buffEDesaparece}
            className={buff ? "buff" : ""}
          >
            Não!
          </LoveButton>
        )}
      </div>
    </div>
  );
}

export default Panel;