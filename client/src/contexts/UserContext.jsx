import React, { createContext, useState } from 'react';

// Ex1 - 1. Crie o contexto
export const UserContext = createContext();

// Ex1 - 2. crie o Provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: null, isAdmin: false });

    // Ex1 - 3. Crie uma função para inicializar/limpar as informações
    //     DICA: faça com que esta função receba por parâmetro todas as informações necessárias.
    //     Sugestão: name (string), isAdmin (boolean)
    const setUserInfo = (name, isAdmin) => {
        if (name && isAdmin !== undefined) {
            setUser({ name, isAdmin });
        } else {
            setUser({ name: null, isAdmin: false });
        }
    };

    // Ex1 - 4. Crie uma função para retornar se a pessoa usuária é admin ou não, retornar true ou false
    const isAdmin = () => user.isAdmin;

    return (
        <UserContext.Provider value={{ user, setUserInfo, isAdmin }}>
            {children}
        </UserContext.Provider>
    );
};
