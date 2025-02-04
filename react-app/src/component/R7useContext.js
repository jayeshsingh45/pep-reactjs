import React, { useContext, createContext } from 'react';

const UserContext = createContext();

function R7useContext() {
    const user = {
        name: 'John Doe',
        role: 'Admin'
    };

    return (
        <UserContext.Provider value={user}>
            <R7useContext />
        </UserContext.Provider>
    );
}

function R7useContextExample() {
    const user = useContext(UserContext);
    
    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <p>Your role is: {user.role}</p>
        </div>
    );

}

export default R7useContext;