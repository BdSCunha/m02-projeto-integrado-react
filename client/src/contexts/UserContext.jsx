import React, { createContext, useState, useContext } from 'react';

// Ex2 - 1. Crie o contexto
const UserContext = createContext();

// Ex2 - 2. crie o Provider
const UserProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    // Ex 4 - Altere o jsx para exibir um botão de cadastro de curso, apenas se a pessoa logada tiver informação admin como true.
    const [showCourseRegistrationButton, setShowCourseRegistrationButton] = useState(true);

    // Ex2 - 3. Crie uma função para inicializar/limpar as informações
    //     DICA: faça com que esta função receba por parâmetro todas as informações necessárias.
    //     Sugestão: name (string), isAdmin (boolean)
    const initializeUser = (name, isAdmin) => {
        setName(name);
        setIsAdmin(isAdmin);
        setShowCourseRegistrationButton(isAdmin);
    };

    const clearUser = () => {
        setName('');
        setIsAdmin(false);
        setShowCourseRegistrationButton(false);
    };

    // Ex2 - 4. Crie uma função para retornar se a pessoa usuária é admin ou não, retornar true ou false
    const isUserAdmin = () => {
        return isAdmin;
    };

    const contextValue = {
        name,
        isAdmin,
        showCourseRegistrationButton,
        initializeUser,
        clearUser,
        isUserAdmin,
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

// Ex 3 - Crie um custom hook que exponha os valores do contexto;
const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };