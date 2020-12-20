import React, { useContext, useEffect, useState } from 'react'
import auth from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

function AuthPorvider({ children }) {

    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    

    const value = {
        currentUser,
    }

    return (
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthPorvider
