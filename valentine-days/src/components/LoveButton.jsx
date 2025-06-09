import React, { forwardRef } from 'react';

const LoveButton = forwardRef(({ tipo, children, onMouseOver, onClick }, ref) => {
  const props = {
    id: tipo,
    className: 'love-button',
    ref: tipo === 'nao' ? ref : null,
    onMouseOver: tipo === 'nao' ? onMouseOver : undefined,
    onClick,
    type: 'button'
  };

  return (
    <button {...props}>
      {children}
    </button>
  );
});

export default LoveButton;