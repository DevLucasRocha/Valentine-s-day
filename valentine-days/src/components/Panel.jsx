import React, { useRef } from 'react';
import LoveButton from './LoveButton';
import './Panel.css';

function Panel() {
  const naoBtn = useRef();
  const painelRef = useRef();

  function fuja() {
    const botaoNao = naoBtn.current;
    const painel = painelRef.current;

    botaoNao.style.position = "absolute";
    botaoNao.style.transition = "left 0.5s, top 0.5s";
    botaoNao.style.zIndex = "1000"; // garantir que o botão fique acima dos outros elementos

    const larguraPainel = painel.offsetWidth;
    const alturaPainel = painel.offsetHeight;

    const maxX = larguraPainel - botaoNao.offsetWidth;
    const maxY = (alturaPainel - botaoNao.offsetHeight) * 0.4; // deixa margem inferior

    const aleatorioX = Math.floor(Math.random() * maxX);
    const aleatorioY = Math.floor(Math.random() * maxY); // só na parte de cima

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
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
        <LoveButton
          tipo="nao"
          ref={naoBtn}
          onMouseOver={fuja}
        >
          Não!
        </LoveButton>
      </div>
    </div>
  );
}

export default Panel;