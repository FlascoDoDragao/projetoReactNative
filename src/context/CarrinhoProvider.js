import React, { useState } from 'react';
import CarrinhoContext from './CarrinhoContext';

const CarrinhoProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  addProduto = produto => {
    setProdutos([...produtos, produto]);
    console.log(produtos);
  };

  delProduto = produtoId => {
    //console.log('Deletar o produto de Id: ' + produtoId);

    let produtoAtualizado = produtos.filter(item => item.item.id !== produtoId);
    setProdutos(produtoAtualizado);
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
