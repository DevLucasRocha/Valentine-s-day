import React, { useRef } from 'react';

function App() {
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
      <a href="https://www.youtube.com/watch?v=oRvND-r57Us">
        <button id="sim">Sim!</button>
      </a>
      <button
        id="nao"
        ref={naoBtn}
        onMouseOver={fuja}
        style={{ position: 'absolute', left: '60%', top: '70%' }}
      >
        Não!
      </button>
    </div>
  );
}

export default App;