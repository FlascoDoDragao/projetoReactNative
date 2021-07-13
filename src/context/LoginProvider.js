import React, {useState} from 'react';
import LoginContext from './LoginContext';

const LoginProvider = ({children}) => {
  const [logado, setLogado] = useState(false);

  setarLogin = pessoa => {
    setLogado([...logado, pessoa]);
    console.log(logado);
  };

  return (
    <LoginContext.Provider
      value={{
        logado: logado,
        setarLogin: setarLogin,
      }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
