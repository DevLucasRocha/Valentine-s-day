import React, { useRef } from 'react';
import LoveButton from './LoveButton';
import './Painel.css';

function Panel() {
  const naoBtn = useRef();
  const painelRef = useRef();

  function fuja() {
    const botaoNao = naoBtn.current;
    const painel = painelRef.current;

    const larguraPainel = painel.offsetWidth;
    const alturaPainel = painel.offsetHeight;

    const maxX = larguraPainel - botaoNao.offsetWidth;
    const maxY = alturaPainel - botaoNao.offsetHeight;

    const aleatorioX = Math.floor(Math.random() * maxX);
    const aleatorioY = Math.floor(Math.random() * maxY);

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
        <a href="https://www.youtube.com/watch?v=oRvND-r57Us">
          <LoveButton tipo="sim">Sim!</LoveButton>
        </a>
        <LoveButton
          tipo="nao"
          refBtn={naoBtn}
          onMouseOver={fuja}
        >
          Não!
        </LoveButton>
      </div>
    </div>
  );
}

export default Panel;