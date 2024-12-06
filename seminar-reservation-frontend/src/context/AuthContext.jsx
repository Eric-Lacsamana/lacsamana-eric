import React, { createContext, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        setIsAuthenticated(!!token);

        const handleStorageChange = (e) => {
            if (e.key === 'jwtToken') {
                if (e.newValue === null) {
                    setIsAuthenticated(false);
                } else {
                    setIsAuthenticated(true);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        setIsLoading(false);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
<AuthContext.Provider value={useMemo(() => ({ isAuthenticated, setIsAuthenticated, isLoading }), [isAuthenticated, setIsAuthenticated, isLoading])}>
  {children}
</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
