import React, {useState} from 'react';
import FavoritoContext from './FavoritoContext';

const FavoritoProvider = ({children}) => {
  const [produtos, setProdutos] = useState([]);

  favProduto = produto => {
    setProdutos([...produtos, produto]);
    console.log(produtos);
  };

  delProduto = produtoId => {
    setProdutos(produtos.slice(produtoId));
    console.log(produtos);
  };

  return (
    <FavoritoContext.Provider
      value={{
        produtos: produtos,
        favProduto: favProduto,
        delProduto: delProduto,
      }}>
      {children}
    </FavoritoContext.Provider>
  );
};

export default FavoritoProvider;
