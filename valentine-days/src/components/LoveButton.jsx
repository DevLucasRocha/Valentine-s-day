import React, { forwardRef } from 'react';

const LoveButton = forwardRef(({ tipo, children, onMouseOver, onClick }, ref) => {
  const props = {
    id: tipo,
    className: 'love-button',
    ref: tipo === 'nao' ? ref : null,
    onMouseOver: tipo === 'nao' ? onMouseOver : undefined,
    onClick,
    style: tipo === 'nao'
      ? { position: 'absolute', left: '65%', top: '10%' }
      : { position: 'relative', left: '0', top: '0' },
    type: 'button'
  };

  return (
    <button {...props}>
      {children}
    </button>
  );
});

export default LoveButton;