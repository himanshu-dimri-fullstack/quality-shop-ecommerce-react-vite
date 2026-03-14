import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        return savedUser ? savedUser : null
    });

    const loginUser = (newUser) => {
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
        navigate("/dashboard");
    };

    const logoutUser = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;