import React, { useRef, useState } from 'react';
import LoveButton from './LoveButton';
import './Panel.css';

function Panel() {
  const naoBtn = useRef();
  const painelRef = useRef();
  const [naoVisible, setNaoVisible] = useState(true);
  const [buff, setBuff] = useState(false);

  function fuja() {
    if (!naoVisible) return;
    const botaoNao = naoBtn.current;
    const painel = painelRef.current;

    botaoNao.style.position = "absolute";
    botaoNao.style.transition = "left 0.5s, top 0.5s";
    botaoNao.style.zIndex = "1000";

    const larguraPainel = painel.offsetWidth;
    const alturaPainel = painel.offsetHeight;

    const maxX = larguraPainel - botaoNao.offsetWidth;
    const maxY = (alturaPainel - botaoNao.offsetHeight) * 0.4;

    const aleatorioX = Math.floor(Math.random() * maxX);
    const aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
  }

  function buffEDesaparece() {
    setBuff(true);
    setTimeout(() => {
      setNaoVisible(false);
      setBuff(false);
      setTimeout(() => {
        // Após sumir, reposiciona e reaparece
        fuja();
        setNaoVisible(true);
      }, 200); // tempo para reaparecer
    }, 200); // tempo da animação de sumir
  }

  return (
    <div className="painel" ref={painelRef}>
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
          onClick={() => window.open("https://www.youtube.com/watch?v=oRvND-r57Us", "_blank")}
        >
          Sim!
        </LoveButton>
        {naoVisible && (
          <LoveButton
            tipo="nao"
            ref={naoBtn}
            onMouseOver={fuja}
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