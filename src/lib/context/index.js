import React , { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [ userFullName, setUserFullName ] = useState('');
    const [ userId, setUserId ] = useState(null);
    const [ selectedChatId, setSelectedChatId ] = useState(null);

    return(
        <AppContext.Provider value={{
            userFullName, userId, selectedChatId,
            setUserFullName, setUserId, setSelectedChatId
        }} >
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;