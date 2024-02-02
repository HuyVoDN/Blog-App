import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("users")) || null);
    
    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {withCredentials: true});
        setCurrentUser(res.data);
    };
    const logout = async (inputs) => {
        await axios.post("http://localhost:8800/api/auth/logout");
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(currentUser));
    }, [currentUser]);
    console.log(currentUser);
    return (
    <AuthContext.Provider value={{currentUser, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}