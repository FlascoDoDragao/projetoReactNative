import React, {useState} from 'react';
import FavoritoContext from './FavoritoContext';

const FavoritoProvider = ({children}) => {
  const [produtos, setProdutos] = useState([]);

  favProduto = produto => {
    setProdutos([...produtos, produto]);
    console.log(produtos);
  };

  delProduto = produtoId => {
    //console.log('Deletar o produto de Id: ' + produtoId);

    let produtoAtualizado = produtos.filter(item => item.item.id !== produtoId);
    setProdutos(produtoAtualizado);
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
