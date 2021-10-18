import React from 'react';

const Product = (props) => {
  return (
    <div
      className={`shadow-lg p-4 m-2 w-60 h-auto
  flex flex-col items-center justify-center`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <img src={props.image} alt={props.name} style={{ width: 100 }} />
      <p className={`text-gray-600 pt-2`}>{props.name}</p>
      <p className={`text-gray-600 pb-4`}>{props.unit} unit(s)</p>

      <p className={`text-yellow-500`}>{props.price}</p>
    </div>
  );
};

export default Product;
