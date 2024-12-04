import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setIsAuthenticated(true);
        } else  {
            setIsAuthenticated(false);
        }
        
        const handleStorageChange = (e) => {
            if (e.key === 'jwtToken' && e.nueValue === null) {
                setIsAuthenticated(false);
            }
        }

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        }
    }, []);


    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}


AuthProvider.propTypes = {
    children:  PropTypes.node.isRequired
};
  