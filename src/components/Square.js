import React from 'react';

const style = {
  background: '#5fd5f6',
  border: '2px solid #5b5b5f',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
};

const Square = ({ onClick, value }) => {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
