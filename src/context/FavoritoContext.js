import React from 'react';

export default React.createContext({
  produtos: [],
  favProduto: (produto) => { },
  delProduto: (produtoId) => { }
});