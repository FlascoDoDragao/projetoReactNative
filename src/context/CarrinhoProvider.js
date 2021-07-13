import React, { useState } from 'react';
import CarrinhoContext from './CarrinhoContext';

const CarrinhoProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  addProduto = produto => {
    setProdutos([...produtos, produto]);
    console.log(produtos);
  };

  delProduto = produtoId => {
    produtos.splice(produtoId, 1);
    setProdutos([...produtos]);

  };

  return (
    <CarrinhoContext.Provider
      value={{
        produtos: produtos,
        addProduto: addProduto,
        delProduto: delProduto,
      }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoProvider;
