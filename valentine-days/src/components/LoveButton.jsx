import React, { forwardRef } from 'react';

// ref é usado para o botão "Não!" (para seu amor não negar você)
const LoveButton = forwardRef(({ tipo, children, onMouseOver}, ref) => {
  const props = {
    id: tipo,
    className: 'love-button',
    ref: tipo === 'nao' ? ref : null,
    onMouseOver: tipo === 'nao' ? onMouseOver : undefined,
    style: tipo === 'nao'
      ? { position: 'absolute', left: '60%', top: '70%' }
      : {},
    type: 'button'
  };

  return (
    <button {...props}>
      {children}
    </button>
  );
});

export default LoveButton;